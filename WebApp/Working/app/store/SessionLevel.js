Ext.define('SE.store.SessionLevel', {
    extend: 'Ext.data.Store',

    requires: [
        'SE.model.SessionLevel'
    ],

    autoLoad: true,
    model: 'SE.model.SessionLevel',
    storeId: 'SessionLevel'
});