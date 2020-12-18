Ext.define('SE.view.Presenters', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.presenters',

    requires: [
        'Ext.grid.View',
        'Ext.grid.column.Number',
        'Ext.grid.plugin.CellEditing'
    ],

    itemId: 'presentersgrid',
    collapseDirection: 'bottom',
    collapsible: true,
    title: 'Presenter(s)',
    store: 'Presenters',

    columns: [
        {
            xtype: 'gridcolumn',
            dataIndex: 'firstLast',
            text: 'Presenter Name',
            flex: 1
        },
        {
            xtype: 'numbercolumn',
            hidden: true,
            dataIndex: 'id',
            text: 'Id'
        }
    ],
    plugins: [
        Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1
        })
    ]

});