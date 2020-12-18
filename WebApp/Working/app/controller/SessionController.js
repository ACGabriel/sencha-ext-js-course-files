Ext.define('SE.controller.SessionController', {
    extend: 'Ext.app.Controller',

    stores: [
        'Sessions',
        'SessionPresenters',
        'Presenters'
    ],

        views: [
      'SessionForm'
        ],

    refs: [
        {
            ref: 'details',
            selector: '#detailspanel'
        },
        {
            ref: 'presenters',
            selector: '#presentersgrid'
        },
        {
            ref: 'sessions',
            selector: '#sessionsgrid'
        }
    ],

    onGridpanelSelect: function(rowmodel, record, index, eOpts) {
        Ext.suspendLayouts();

        var sessionId = record.get("id"),
            presenterIds = [];

        this.getSessionPresentersStore().each(function(rec) {
            if (rec.get("sessionId") === sessionId) {
                presenterIds.push(rec.get("presenterId"));
            }
        });
        presenterIds.push(-1); // always have at least one value in the list

        this.getPresentersStore().clearFilter();
        this.getPresentersStore().filter([
            {
                property: "id",
                value: presenterIds[0]
            }
        ]);

        // replace what is in presenters data with  what is in store of presenters
        // in case it has changed
        var sessions = record.getData();
        sessions.presenters = [];
        this.getPresentersStore().each(function(presenterRecord) {
            sessions.presenters.push(presenterRecord.getData());
        });

        this.detailPanel = this.getDetails();
        if (!this.detailPanel.tpl) {
            Ext.Ajax.request({
                scope: this,
                //local path of your html file
                url: '/Data/Templates/CodeStarsSummitPresenterDetailPS.html',
                success: function (response) {
                    this.detailPanel.tpl = new Ext.XTemplate(response.responseText);
                    this.detailPanel.update(sessions);
                },
                failure: function(response) {
                    var text = response.responseText;
                    Ext.Msg.alert('Error', text, Ext.emptyFn);
                }
            });
        } else {
            this.detailPanel.update(sessions);
        }

        Ext.resumeLayouts(true);
    },

    onSessioneditbuttonitemidClick: function(button, e, eOpts) {
        var grid = this.getSessions(),
            session = grid.getSelectionModel().getSelection()[0];

        debugger;
        if (!this.formWindows) {
            this.formWindow = Ext.create('SE.view.SessionForm');
        }
        var form = this.formWindow.down('form').getForm();

        form.loadRecord(session);
        this.formWindow.setTitle("Edit Session");
        this.formWindow.show();
    },

    onCancelbuttonsessionitemidClick: function(button, e, eOpts) {
        var form = button.up('form').getForm(),
            formWindow = button.up('window'),
            store = this.getSessionsStore();

        if (form.isDirty()) {
            Ext.Msg.show({
                title: 'Save Changes?',
                msg: 'Save Your Changes Before Exiting?',
                buttons: Ext.Msg.YESNOCANCEL,
                fn: function(text) {
                    if (text == 'yes') {
                        form.updateRecord();
                        store.sync();
                        formWindow.destroy();
                    } else if (text === 'no') {
                        formWindow.destroy();
                    } else if (text === 'cancel') {
                        // do nothing
                    }
                }
            });
        } else {
            formWindow.destroy();
        }
    },

    onSavebuttonsessionitemidClick: function(button, e, eOpts) {
        var form = button.up('form').getForm(),
            formWindow = button.up('window'),
            store = this.getSessionsStore(),
            session = form.getRecord(),
            isNew = session.get('id') === 0,
            grid = this.getSessions();

        form.updateRecord();

        if (form.isValid()) {

            if (isNew) {
                console.log('adding new session ' + session.get('title'));
                store.add(session);
                grid.getView().focusRow(session);
                grid.getSelectionModel().doSelect(session);
            }

            store.sync();

            grid.fireEvent('select', grid, grid.getSelectionModel().getLastSelected());

            formWindow.destroy();

        }


    },

    onSessiondeletebuttonitemidClick: function(button, e, eOpts) {
        var grid = this.getSessions(),
            session = grid.getSelectionModel().getSelection()[0],
            store = grid.getStore();

        if (session !== null) {
            Ext.Msg.show({
                title: 'Conformation',
                msg: 'Delete Selected Session?',
                buttons: Ext.Msg.YESNO,
                fn: function(text) {
                    if (text == 'yes') {
                        store.remove(session);
                        store.sync();
                    }
                }
            });
        }
    },

    onSessionaddbuttonitemidClick: function(button, e, eOpts) {

        var session = Ext.create("SE.model.Session", {
            sessionLevelId: 1
        });

        if (!this.formWindows) {
            this.formWindow = Ext.create('SE.view.SessionForm');
        }

        var form = this.formWindow.down('form').getForm();
        form.loadRecord(session);
        this.formWindow.setTitle("New Session");
        this.formWindow.show();
    },

    init: function(application) {
        this.control({
            "sessions": {
                select: this.onGridpanelSelect
            },
            "#sessioneditbuttonitemid": {
                click: this.onSessioneditbuttonitemidClick
            },
            "#cancelbuttonsessionitemid": {
                click: this.onCancelbuttonsessionitemidClick
            },
            "#savebuttonsessionitemid": {
                click: this.onSavebuttonsessionitemidClick
            },
            "#sessiondeletebuttonitemid": {
                click: this.onSessiondeletebuttonitemidClick
            },
            "#sessionaddbuttonitemid": {
                click: this.onSessionaddbuttonitemidClick
            }
        });
    }

});
