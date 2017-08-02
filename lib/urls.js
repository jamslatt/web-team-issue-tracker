Router.configure({
    layoutTemplate: 'base',
    notFoundTemplate: '404'
});

// URL Routes
Router.route('/', function () {
    this.render('home');
    Router.onAfterAction(function () {
        document.title = "Digital Design Issue Tracker"
    });
});