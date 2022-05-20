import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { check } from 'meteor/check';

Meteor.methods({
    'verifyOrMakeAccount'(username, password) {
        if (!Accounts.findUserByUsername(username)) {
            console.log(`creating new account: ${username}`)
            Accounts.createUser({ username, password });
        }
        return
    }
});