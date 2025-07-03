const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const TodoModel = require('./Models/Todo')

const app = express();
app.use(cors("*"));
app.use(express.json());

<<<<<<< HEAD
mongoose.connect('mongodb+srv://harini:120507@cluster0.ltmw4g9.mongodb.net/todo');
=======
mongoose.connect('mongodb://0.0.0.0:27017/test');
>>>>>>> 96d1f7622ae7d58a0618373b431421d459c3651f

app.get('/get', (req, res) => {
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

<<<<<<< HEAD

app.put('/update/:id', (req, res) =>{
    const {id} = req.params;
    TodoModel.findByIdAndUpdate({_id: id}, {done: true})
    .then(result => res.json(result))
=======
app.put('/update/:id', (req, res) =>{
    const {id} = req.params;
    TodoModel.findByIdAndUpdate({_id: id}, {done: true})
    .then(restul => res.json(result))
>>>>>>> 96d1f7622ae7d58a0618373b431421d459c3651f
    .catch(err => res.json(err))
})

app.put('/delete/:id', (req, res) => {
    const {id} = req.params;
    TodoModel.findByIdAndDelete({_id: id})
<<<<<<< HEAD
    .then(result => res.json(result))
=======
    .then(restul => res.json(result))
>>>>>>> 96d1f7622ae7d58a0618373b431421d459c3651f
    .catch(err => res.json(err))
})

app.post('/add', (req, res) => {
    const task = req.body.task;
    TodoModel.create({
        task:task
    })
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
});

app.listen(3001, () => {
    console.log("Server is Running");
});
