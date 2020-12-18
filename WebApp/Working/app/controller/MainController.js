Ext.define('SE.controller.MainController', {
    extend: 'Ext.app.Controller',

    stores: [
        'Sessions',
        'SessionPresenters',
        'Presenters'
    ],

    onMainViewAfterRender: function(component, eOpts) {
        this.getSessionsStore().load({
            scope: this,
            params: {
                codeCampYearId: 8
            },
            callback: function(recordsSessions, operation, success) {
                this.getSessionPresentersStore().load(
                {
                    scope: this,
                    params: {
                        codeCampYearId: 8
                    },
                    callback: function(recordsSessionPresenter, operation, success) {
                        this.getPresentersStore().load({
                            scope: this,
                            params: {
                                codeCampYearId: 8
                            },
                            callback: function(recordsPresenter, operations, success) {
                            }
                        });

                    }
                });
            }
        });
    },

    init: function(application) {
        this.control({
            "#mainView": {
                afterrender: this.onMainViewAfterRender
            }
        });
    }

});
