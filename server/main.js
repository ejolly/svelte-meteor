import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Messages } from "/imports/db/MessagesCollection";
import '/imports/api/userMethods';
import '/imports/api/userPublications';
import '/imports/api/messagesMethods';
import '/imports/api/messagesPublications';

const insertMessage = (msgObj) => Messages.insert(msgObj);

const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';

Meteor.startup(() => {
    if (!Accounts.findUserByUsername(SEED_USERNAME)) {
        console.log("Creating dummy user")
        Accounts.createUser({
            username: SEED_USERNAME,
            password: SEED_PASSWORD,
        });
        console.log("Dummy user creation not required")
    }
    if (Messages.find().count() === 0) {
        // TODO: Change hard-coded from-to ids after working on user accounts 
        [
            {
                text: 'Hi',
                from: "meteorite",
                to: "ejolly",
                createdAt: new Date(),
            },
            {
                text: 'Hii',
                from: "ejolly",
                to: "meteorite",
                createdAt: new Date(),
            },
            {
                text: 'How are you?',
                from: "ejolly",
                to: "meteorite",
                createdAt: new Date(),
            },
            {
                text: 'Great!',
                from: "meteorite",
                to: "ejolly",
                createdAt: new Date(),
            },
        ].forEach(msgObj => insertMessage(msgObj));
    }

});
