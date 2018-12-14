const {ObjectID} = require('mongodb');
var {mongoose} = require('./../server/db/mongoose.js');
var {Todo} = require('./../server/model/todo.js');
const {User}= require('./../server/model/user.js');
var id = '5c0d9dcb4f50d403a8b63f40';

// if(!ObjectID.isValid(id)){
//     console.log('ID is not valid.');
// }

// Todo.find({
//     _id:id
// }).then((todos)=>{
//     console.log('Todos', todos);
// })

// Todo.findOne({
//     _id:id
// }).then

User.findById(id).then((user)=>{
    if(!user){
        return console.log('Unable to find user.');
    }
    console.log(user);
}, (e)=>{
    console.log(e);
})