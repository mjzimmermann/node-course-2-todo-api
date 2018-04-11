const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5ace455a30826a940f7261b811';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// };

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos)
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo)
// });

// Todo.findById(id).then((todo) => {
//   if (!todo){
//     return console.log('ID not found');
//   }
//   console.log('Todo by ID', todo);
// }).catch((e) => {
//   return console.log('Error', e)
// });

// User.findById
// handle case where user not found
// handle case where user is found
// handle case where there is an error

var id = '5acd175de359b3e816a6a51a';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('No user was found');
  }
  console.log('User was found', JSON.stringify(user, undefined, 2));
}).catch((e) => {
  return console.log('Error', e);
});
