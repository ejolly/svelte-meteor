import { Meteor } from 'meteor/meteor';
import { Messages } from '/imports/db/MessagesCollection';

Meteor.publish('messages', function publishMessages() {
  return Messages.find();
});