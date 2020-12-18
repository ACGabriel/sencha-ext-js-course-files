Ext.define('SE.view.MainView', {
    extend: 'Ext.container.Viewport',

    requires: [
        'SE.view.Sessions',
        'SE.view.Presenters',
        'SE.view.Details',
        'Ext.grid.Panel',
        'Ext.resizer.Splitter'
    ],

    id: 'mainView',
    layout: 'fit',

    items: [
        {
            xtype: 'panel',
            resizable: false,
            layout: 'border',
            collapsed: false,
            items: [
                {
                    xtype: 'container',
                    region: 'center',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'sessions',
                            flex: 6
                        },
                        {
                            xtype: 'splitter'
                        },
                        {
                            xtype: 'presenters',
                            flex: 2
                        }
                    ]
                },
                {
                    xtype: 'details',
                    flex: 2,
                    region: 'east',
                    split: true
                }
            ]
        }
    ]

});