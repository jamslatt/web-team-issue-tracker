import SimpleSchema from 'simpl-schema';

issues = new Mongo.Collection('issues');

issues.allow({
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

IssueSchema = new SimpleSchema({
    "title": {
        type: String,
        label: "Post Title"
    },
    "name": {
        type: String
    },
    "owner": {
        type: String,
    },
    "status": {
        type: String,
        defaultValue: "Open",
        label: "Status"
    },
    "date": {
        type: String,
    },
    "createdAt": {
        type: Date,
    },
    "content": {
        type: String,
        label: "Issue"
    },
});

issues.attachSchema(IssueSchema);