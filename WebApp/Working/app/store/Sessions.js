Ext.define('SE.store.Sessions', {
    extend: 'Ext.data.Store',

    requires: [
        'SE.model.Session',
        'Ext.util.Sorter'
    ],

    autoLoad: false,
    model: 'SE.model.Session',
    remoteFilter: true,
    storeId: 'Sessions',
    groupField: 'sessionTimeDateTime',
    pageSize: 999,
    sorters: [
        {
            property: 'sessionTimeDateTime'
        },
        {
            property: 'title'
        }
    ]

});