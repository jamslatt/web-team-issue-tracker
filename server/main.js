import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    Roles.addUsersToRoles('MKSceXeMDqmDWFBsX', ['admin']);
});
