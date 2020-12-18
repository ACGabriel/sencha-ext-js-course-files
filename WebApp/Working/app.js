Ext.Loader.setConfig({
    enabled: true
});


Ext.application({
    requires: [
        'Ext.window.MessageBox'
    ],
    models: [
        'Session',
        'Presenter',
        'SessionLevel',
        'SessionPresenter'
    ],
    stores: [
        'SessionLevel',
        'Presenters',
        'SessionPresenters',
        'Sessions'
    ],
    views: [
        'MainView',
        'Details',
        'Presenters',
        'Sessions',
        'SessionForm'
    ],
    controllers: [
        'MainController',
        'SessionController'
    ],
    name: 'SE',

    launch: function() {
        Ext.create('SE.view.MainView');
    }

});
