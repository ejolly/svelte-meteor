// Server startup stuff
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Messages } from "/imports/db/MessagesCollection";
import '/imports/api/userMethods';
import '/imports/api/userPublications';
import '/imports/api/messagesMethods';
import '/imports/api/messagesPublications';

// Create at two fake accounts
const dummyUsers = [
  { username: 'meteorite', password: 'password' },
  { username: 'ejolly', password: 'test' },
];
const dummyMessages = [
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
  }
];

// Helper function used below
const insertMessage = (msgObj) => Messages.insert(msgObj);

// Seed database with a few messages if it's empty
Meteor.startup(() => {
  console.log("Checking for dummy accounts...");
  dummyUsers.forEach(({ username, password }) => {
    if (!Accounts.findUserByUsername(username)) {
      console.log(`Creating dummy user: ${username}`);
      Accounts.createUser({ username, password });
    }
  });
  console.log("Checking for dummy messages...");
  if (Messages.find().count() === 0) {
    console.log("Seeding empty database with some messages...");
    // TODO: Change hard-coded from-to ids after working on user accounts 
    dummyMessages.forEach(msgObj => insertMessage(msgObj));
  }

});
