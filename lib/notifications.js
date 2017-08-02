import SimpleSchema from 'simpl-schema';

notifications = new Mongo.Collection('notifications');

notifications.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function (userId, doc) {
        return !!userId;
    },
    remove: function (userId, doc) {
        return !!userId;
    }
});

NotifySchema = new SimpleSchema({
    "forId": {
        type: String,
    },
    "issueId": {
        type: String
    },
    "message": {
        type: String
    },
    "read": {
        type: Boolean,
        defaultValue: false
    }
});

notifications.attachSchema(NotifySchema);