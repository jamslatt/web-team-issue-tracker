import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    Roles.addUsersToRoles('tXomkdaBBcNzKc3kC', ['admin']);
});
