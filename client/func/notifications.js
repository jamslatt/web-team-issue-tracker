Template.home.helpers({
    notifications: function () {
        return notifications.find({ forId: Meteor.userId() });
    }
});
Template.closed_feed.helpers({
    notifications: function () {
        return notifications.find({ forId: Meteor.userId() });
    }
});
Template.all_feed.helpers({
    notifications: function () {
        return notifications.find({ forId: Meteor.userId() });
    }
});