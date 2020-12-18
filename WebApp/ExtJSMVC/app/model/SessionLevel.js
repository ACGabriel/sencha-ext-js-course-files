Ext.define('SE.model.SessionLevel', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json'
    ],

    fields: [
        {
            name: 'id'
        },
        {
            name: 'description'
        }
    ],

    proxy: {
        type: 'rest',
        url: '/data/Ext/SessionLevels.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});