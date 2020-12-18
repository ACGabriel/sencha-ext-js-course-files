Ext.define('SE.controller.SessionController', {
    extend: 'Ext.app.Controller',


    onGridpanelSelect: function(rowmodel, record, index, eOpts) {
       
    },

    init: function(application) {
        this.control({
            "sessions": {
                select: this.onGridpanelSelect
            }
        });
    }

});
