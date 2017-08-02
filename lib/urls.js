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

Router.route('/issues/closed', function () {
    this.render('closed_feed');
    Router.onAfterAction(function () {
        document.title = "Digital Design Issue Tracker"
    });
});

Router.route('/issues/all', function () {
    this.render('all_feed');
    Router.onAfterAction(function () {
        document.title = "Digital Design Issue Tracker"
    });
});


// Issue Routes
Router.route('/issue/new', function () {
    this.render('new_issue');
    Router.onAfterAction(function () {
        document.title = "Digital Design Issue Tracker";
    });
});

Router.route('/issue/:_id', function () {
    this.render('issue_detail', {
        data: function () {
            return issues.findOne({ _id: this.params._id });
        }
    });
    Router.onAfterAction(function () {
        document.title = "Digital Design Issue Tracker";
    });
})