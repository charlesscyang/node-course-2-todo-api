// const MongoClient = require('mongodb').MongoClient;
const {MongoClientn, ObjectID} = require('mongodb');
var obj =

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if(err){
        return console.log("Unable to connect to server.");
    }
    console.log('Connected to MongoDB server.');
    const db = client.db('TodoApp');
    
    // db.collection('Todos').insertOne({
    //     text:'Something to do.',
    //     completed: false
    // },(err, results)=>{
    //     if(err){
    //         return console.log("Unable to insert into todo.",err);
    //     }
    //     console.log(JSON.stringify(results.ops, undefined, 2));
    // })

    // db.collection('Users').insertOne({
    //     name:'Andrew',
    //     age:25,
    //     location:'LA'
    // },(err,results)=>{
    //     if(err){
    //         return console.log('Unable to insert user.',err);
    //     }
    //     console.log(results.ops[0]._id.getTimestamp());
    // })

    client.close();
})

