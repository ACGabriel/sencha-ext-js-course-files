Ext.define('SE.view.SessionForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.sessionform',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.TextArea',
        'Ext.form.field.ComboBox',
        'Ext.button.Button'
    ],

    itemId: 'recordForm',
    padding: 5,
    width: 600,
    autoDestroy: false,
    manageHeight: false,
    title: 'Edit Record',
    modal: true,

    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    bodyStyle: {
        'background-color': '#fff'
    },
    items: [
        {
            xtype: 'form',
            flex: 3,
            border: 0,
            itemId: 'form',
            bodyBorder: false,
            bodyPadding: 10,
            manageHeight: false,
            title: '',
            fieldDefaults: {
                labelWidth: 90
            },
            trackResetOnLoad: true,
            items: [
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    margin: '0 0 10',
                    fieldLabel: 'Title',
                    labelAlign: 'right',
                    name: 'title',
                    allowBlank: false,
                    validateBlank: true
                },
                {
                    xtype: 'textareafield',
                    anchor: '100%',
                    margin: '0 0 10',
                    fieldLabel: 'Description',
                    labelAlign: 'right',
                    name: 'description',
                    rows: 7
                },
                {
                    xtype: 'combobox',
                    anchor: '100%',
                    itemId: 'sessionLevelItemId',
                    fieldLabel: 'Session Level',
                    name: 'sessionLevelId',
                    displayField: 'description',
                    store: 'SessionLevel',
                    valueField: 'id',
                    valueNotFoundText: '1'
                },
                {
                    xtype: 'container',
                    padding: '10 10 10 10',
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'button',
                            formBind: true,
                            itemId: 'savebuttonsessionitemid',
                            margin: '5 5 5 5 ',
                            text: 'Save'
                        },
                        {
                            xtype: 'button',
                            itemId: 'cancelbuttonsessionitemid',
                            margin: '5 5 5 5',
                            text: 'Cancel'
                        }
                    ]
                }
            ]
        }
    ]

});