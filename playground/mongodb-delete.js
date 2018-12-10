// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if(err){
        return console.log("Unable to connect to server.");
    }
    console.log('Connected to MongoDB server.');
    const db = client.db('TodoApp');
    
    //deleteMany
    db.collection('Todos').deleteMany({text:"Make a company"}).then((results)=>{
        console.log(results);
    })

    //deleteOne

    //findOneAndDelete
   

    // client.close();
})

