Ext.define('SE.controller.MainController', {
    extend: 'Ext.app.Controller',

    onMainViewAfterRender: function(component, eOpts) {
        
    },

    init: function(application) {
        this.control({
            "#mainView": {
                afterrender: this.onMainViewAfterRender
            }
        });
    }

});
