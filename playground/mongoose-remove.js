const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

//Todo.remove

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

//findByIdAndRemove
Todo.findByIdAndRemove('5c404bf84d6f6d7c1637ac08').then((todo) => {
    console.log(todo);
});