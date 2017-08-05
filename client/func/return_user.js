Template.base.helpers({
     avatar: function () {
           return Meteor.user().services.google.picture;
    },
     name: function () {
         return Meteor.user().services.google.given_name;
     },
     admin: function () {
         return Roles.userIsInRole(Meteor.user(), ['admin']);
     }
});