const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');


// var id = '5bfc6f0790001a343d7157e411';

// if ( !ObjectID.isValid(id)) {
//     console.log('ID not Valid');
// }



// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todo find:', todos);
// });

// //To find one document
// Todo.findOne({
//     _id: id
// }).then((todos) => {
//     console.log('Todo findOne:', todos);
// });

//To find by ID
// Todo.findById(id).then((todos) => {
//     if ( !todos ) {
//         return console.log('ID not found');
//     }
//     console.log('Todo find by ID:', todos);
// }).catch((e) => console.log(e))

User.findById('5bee28eb245bd55c0d616d35').then((todos) => {
    if ( !todos ) {
        return console.log('User not found');
    }
    console.log(JSON.stringify(todos, undefined, 2));
}, (e) => {
    console.log(e);
})