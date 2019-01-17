const {ObjectID} = require('mongodb');
let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos})
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    // res.send(req.params);
    var id = req.params.id;
    if ( !ObjectID.isValid(id) ) {
        return res.status(404).send();
    }

    Todo.findById(id).then((todos) => {
        if ( !todos ) {
            return res.status(404).send();
        }
            res.send({todos});
    }).catch((e) => {
        res.status(404).send();
    });
});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;

    if( !ObjectID.isValid(id) ){
        return res.status(404).send();
    }
    Todo.findByIdAndRemove(id).then((todos) => {

        if (!todos) {
            res.status(404).send(e);
        }
        res.send(todos);
    }).catch((e) => {
        res.status(400).send(e);
    })
});


app.listen(port, () => {
    console.log(`Starting on port ${port}`);
});

module.exports = {app};



