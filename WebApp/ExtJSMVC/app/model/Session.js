Ext.define('SE.model.Session', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json'
    ],

    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'codeCampYearId',
            type: 'int'
        },
        {
            name: 'sessionLevelId',
            type: 'int'
        },
        {
            name: 'sessionCategoryId',
            type: 'int'
        },
        {
            name: 'title',
            sortType: 'asUCString',
            type: 'string'
        },
        {
            name: 'description',
            type: 'string'
        },
        {
            name: 'sessionTime',
            type: 'string'
        },
        {
            dateFormat: 'c',
            name: 'sessionTimeDateTime',
            sortType: 'asDate',
            type: 'date'
        },
        {
            convert: function(v, rec) {
                var convertIt = Ext.util.Format.dateRenderer('m/d/Y g:i a'),
                    pretty = convertIt(rec.get("sessionTimeDateTime"));
                return pretty;
            },
            name: 'sessionTimePretty',
            type: 'string'
        },
        {
            name: 'presenters'
        },
        {
            name: 'sessionPresenter'
        }
    ],

    proxy: {
        type: 'rest',
        url: '/data/Ext/sessions.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});