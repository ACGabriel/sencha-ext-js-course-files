//Ext.define('SE.controller.SessionController', {
//    extend: 'Ext.app.Controller',


//    onGridpanelSelect: function(rowmodel, record, index, eOpts) {
       
//    },

//    init: function(application) {
//        this.control({
//            "sessions": {
//                select: this.onGridpanelSelect
//            }
//        });
//    }

//});


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

    onGridpanelSelect: function (rowmodel, record, index, eOpts) {

        Ext.suspendLayouts();

        var sessionId = record.get("id"),
            presenterIds = [];

        this.getSessionPresentersStore().each(function (rec) {
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
        this.getPresentersStore().each(function (presenterRecord) {
            sessions.presenters.push(presenterRecord.getData());
        });

        /*
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
                failure: function (response) {
                    var text = response.responseText;
                    Ext.Msg.alert('Error', text, Ext.emptyFn);
                }
            });
        } else {
            this.detailPanel.update(sessions);
        }
        */

        Ext.resumeLayouts(true);
    },



    init: function (application) {
        this.control({
            "sessiongridpanel": {
                select: this.onGridpanelSelect
            }
        });
    }

});
