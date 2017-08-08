Meteor.publish("notifications", function(){
       return notifications.find({forId: this.userId});
});
Meteor.publish("issues", function(){
       return issues.find({});
});
Meteor.publish("replies", function(){
       return replies.find({});
});
Meteor.publish('userData', function () {
  return Meteor.users.find({_id: this.userId},
        {fields: {'other': 1, 'services': 1}});
});
