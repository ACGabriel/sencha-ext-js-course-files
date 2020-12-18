Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'SE',

    requires: [
        'SE.view.MainView'
    ],

    controllers: [
        'SessionController'
    ],

    stores: [
        'Sessions',
        'SessionPresenters',
        'Presenters'
    ],

    models: [
        'Session',
         'SessionPresenter',
        'Presenter'
    ],

    views: [
        'Sessions',
        'SessionForm',
        'Presenters'
    ],


    
    launch: function () {
        Ext.create('SE.view.MainView');
    }
});