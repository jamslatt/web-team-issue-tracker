Template.home.events({
    'click .login': function () {
        Meteor.loginWithGoogle({
            requestPermissions: [
                'https://www.googleapis.com/auth/userinfo.profile',
                'https://www.googleapis.com/auth/plus.me'
            ]
        })
    }
 });