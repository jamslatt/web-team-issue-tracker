Template.new_issue.events({
    'submit form': function () {
        event.preventDefault();
        let title = $('#issue_title').val();
        let content = $('#issue_content').val();
        let owner = Meteor.userId();
        let name = Meteor.user().services.google.name;
        let date = moment().format("MMM Do YY");
        let createdAt = new Date();

        issues.insert({
            title: title,
            content: content,
            owner: owner,
            date: date,
            name: name,
            createdAt: createdAt
        });
        Router.go('/');
    }
})

Template.stream_open.helpers({
    feed_open: function () {
        return issues.find({ status: "Open" }, { sort: { createdAt: -1 } });
    }
})

Template.stream_closed.helpers({
    feed_closed: function () {
        return issues.find({ status: "Closed" }, { sort: { createdAt: -1 } });
    },
})

Template.stream_all.helpers({
    feed_all: function () {
        return issues.find({},{ sort: { createdAt: -1 } });
    }
})



Template.issue_detail.helpers({
    reply_stream: function () {
        return replies.find({ issueId: this._id });
    },
})

Template.issue_detail.events({
    'click .issue_del': function () {
        issues.remove(this._id);
        Router.go('/');
    },
    'click .issue_close': function () {
        issues.update(this._id, {
            $set: {
                status: "Closed"
            }
        });
        Router.go('/');
    },
    'click .reply_del': function () {
        replies.remove(this._id);
    },
    'click .init_reply': function () {
        event.preventDefault();

        let issueId = this._id;
        let name = Meteor.user().services.google.name;
        let date = moment().format("MMM Do YY");
        let content = $('#issue_reply').val();
        let avatar = Meteor.user().services.google.picture;

        replies.insert({
            issueId: issueId,
            name: name,
            date: date,
            avatar: avatar,
            content: content
        });

        // notify owner
        let op_owner = this.owner;
        notifications.insert({
            forId: op_owner,
            issueId: issueId,
            message: name + " has replied to your post."
        });
        $('#issue_reply').val("");
    }
})