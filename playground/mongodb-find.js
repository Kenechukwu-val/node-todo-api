const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if ( err ){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

//    db.collection('Todos').find({   //To find a particular collection a database
//        _id: new ObjectID('5be9436c096c0f00c8f79184')
//    }).toArray().then((docs) => {
//         console.log('Todos');
//         console.log(JSON.stringify(docs, undefined, 2));

//    }, (err) => {
//         console.log('Unable to find Todos', err);
//    });

    // db.collection('Todos').find().count().then((count) => { //Getting the number of collections in a db
    //     console.log(`Todos Count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to find Todos', err);
    // });

    db.collection('Users').find({name: 'Daniel'}).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to Find Users');
    });
    db.close();
});