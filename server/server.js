require('./config/config');

const _ = require('lodash');
const {ObjectID} = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const app = express();
const port = process.env.PORT;

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
        res.send({todos});
    }).catch((e) => {
        res.status(404).send(e);
    })
});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if( !ObjectID.isValid(id) ){
        return res.status(404).send();
    }

    if(_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    }else{
        body.completedAt = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if (!todo) {
            res.status(404).send(e);
        }
        res.send({todo});

    }).catch((e) => {
        res.status(404).send();
    })

})


app.listen(port, () => {
    console.log(`Starting on port ${port}`);
});

module.exports = {app};



