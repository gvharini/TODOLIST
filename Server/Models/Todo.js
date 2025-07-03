const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    task: String,
    done: {
        type: Boolean,
        default: false
<<<<<<< HEAD
    } 
=======
    }
>>>>>>> 96d1f7622ae7d58a0618373b431421d459c3651f
})

const TodoModel = mongoose.model('todos',TodoSchema)

module.exports = TodoModel