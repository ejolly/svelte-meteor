import { Meteor } from 'meteor/meteor';
import { Messages } from '../db/MessagesCollection';
import { Match } from 'meteor/check';

Meteor.methods({
    'insert'(msg) {
        if (Match.test(msg, {
            from: String,
            to: String,
            text: String,
            createdAt: Date
        })) {
            Messages.insert(msg);
        } else {
            throw new Meteor.Error("Badly formatted message data")
        }
    }
});