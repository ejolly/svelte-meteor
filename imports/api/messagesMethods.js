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
      throw new Meteor.Error("Badly formatted message data");
    }
  }
});

// Keeping this block here for reference from the meteor scaffold for how to work with
// the database 

// import { TasksCollection } from '../db/TasksCollection';

// Meteor.methods({
//     'tasks.insert'(text) {
//         check(text, String);

//         if (!this.userId) {
//             throw new Meteor.Error('Not authorized.');
//         }

//         TasksCollection.insert({
//             text,
//             createdAt: new Date(),
//             userId: this.userId,
//         });
//     },

//     'tasks.remove'(taskId) {
//         check(taskId, String);

//         if (!this.userId) {
//             throw new Meteor.Error('Not authorized.');
//         }

//         const task = TasksCollection.findOne({ _id: taskId, userId: this.userId });

//         if (!task) {
//             throw new Meteor.Error('Access denied.');
//         }

//         TasksCollection.remove(taskId);
//     },

//     'tasks.setIsChecked'(taskId, isChecked) {
//         check(taskId, String);
//         check(isChecked, Boolean);

//         if (!this.userId) {
//             throw new Meteor.Error('Not authorized.');
//         }

//         const task = TasksCollection.findOne({ _id: taskId, userId: this.userId });

//         if (!task) {
//             throw new Meteor.Error('Access denied.');
//         }

//         TasksCollection.update(taskId, {
//             $set: {
//                 isChecked,
//             },
//         });
//     },
// });