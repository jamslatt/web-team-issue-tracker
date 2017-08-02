import SimpleSchema from 'simpl-schema';

replies = new Mongo.Collection('replies');

replies.allow({
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

RepliesSchema = new SimpleSchema({
    "issueId": {
        type: String,
    },
    "name": {
        type: String
    },
    "date": {
        type: String,
    },
    "avatar": {
        type: String
    },
    "content": {
        type: String,
        label: "Issue"
    },
});

replies.attachSchema(RepliesSchema);