const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if ( err ){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

//    db.collection('Todos').findOneAndUpdate({
//        _id: new ObjectID('5be947b9bf3ca0adb48b900a')
//    }, {
//        $set: {
//            completed: false
//        }
//    }, {
//        returnOriginal: false

//    }).then((result) => {
//        console.log(result);
//    });

    // db.collection('Users').findOneAndUpdate({name: 'Kenechukwu'},{
    //     $set: {
    //         name: 'Kene'
    //     }
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({name: 'Kene'},{
        $inc: {
            age: 1
        }
    }).then((result) => {
        console.log(result);
    });

});