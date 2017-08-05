Template.home.helpers({
    notifications: function () {
        return notifications.find(
            { forId: Meteor.userId(), read: false }
        );
    },
    notif_exist: function () {
        if (notifications.find({ read: false}).count() > 0) {
            return true;
        }
        else return false;
    },
    admin: function () {
        return Roles.userIsInRole(Meteor.user(), ['admin']);
    }
});
Template.closed_feed.helpers({
    notifications: function () {
        return notifications.find(
            { forId: Meteor.userId(), read: false }
        );
    },
    notif_exist: function () {
        if (notifications.find({ read: false }).count() > 0) {
            return true;
        }
        else return false;
    },
    admin: function () {
        return Roles.userIsInRole(Meteor.user(), ['admin']);
    }
});
Template.all_feed.helpers({
    notifications: function () {
        return notifications.find(
            { forId: Meteor.userId(), read: false }
        );
    },
    notif_exist: function () {
        if (notifications.find({ read: false }).count() > 0) {
            return true;
        }
        else return false;
    },
    admin: function () {
        return Roles.userIsInRole(Meteor.user(), ['admin']);
    }
});

Template.home.events({
    'click .notif': function () {
        notifications.update(this._id, {
            $set: {
                read: true
            }
        });
    }
});

Template.closed_feed.events({
    'click .notif': function () {
        notifications.update(this._id, {
            $set: {
                read: true
            }
        });
    }
});

Template.all_feed.events({
    'click .notif': function () {
        notifications.update(this._id, {
            $set: {
                read: true
            }
        });
    }
});