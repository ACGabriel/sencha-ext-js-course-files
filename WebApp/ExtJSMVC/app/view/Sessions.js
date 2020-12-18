Ext.define('SE.view.Sessions', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.sessions',

    requires: [
        'Ext.grid.View',
        'Ext.grid.column.Column',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.selection.RowModel',
        'Ext.grid.feature.Grouping',
        'Ext.XTemplate'
    ],

    itemId: 'sessionsgrid',
    title: 'Sessions List',
    store: 'Sessions',
    viewConfig: {
        itemId: 'mygridview'
    },
    columns: [
        {
            xtype: 'gridcolumn',
            hidden: true,
            width: 43,
            dataIndex: 'codeCampYearId',
            text: 'Yr'
        },
        {
            xtype: 'gridcolumn',
            minWidth: 100,
            dataIndex: 'title',
            text: 'Title',
            flex: 1
        },
        {
            xtype: 'gridcolumn',
            hidden: true,
            width: 200,
            dataIndex: 'sessionTimePretty',
            text: 'Session Time'
        },
        {
            xtype: 'gridcolumn',
            hidden: true,
            width: 43,
            dataIndex: 'id',
            text: 'Id'
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            itemId: 'mainToolbarItemId',
            items: [
                {
                    xtype: 'button',
                    itemId: 'sessionaddbuttonitemid',
                    icon: 'resources/images/add.png',
                    text: 'Add Session'
                },
                {
                    xtype: 'button',
                    itemId: 'sessioneditbuttonitemid',
                    icon: 'resources/images/edit.png',
                    text: 'Edit Session'
                },
                {
                    xtype: 'button',
                    itemId: 'sessiondeletebuttonitemid',
                    icon: 'resources/images/delete.png',
                    text: ' Delete Session'
                }
            ]
        },
        {
            xtype: 'toolbar',
            dock: 'top',
            itemId: 'sessionToolbarItemId'
        }
    ],
    selModel: Ext.create('Ext.selection.RowModel', {

    }),
    features: [
        {
            ftype: 'grouping',
            startCollapsed: true,
            groupHeaderTpl: [
                '{[values.rows[0].get(\'sessionTime\')]} (Session Count: {rows.length})'
            ]
        }
    ]

});