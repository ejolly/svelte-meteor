import { Meteor } from 'meteor/meteor';

Meteor.publish("userStatuses", function () {
  return Meteor.users.find({ "status.online": true });
});