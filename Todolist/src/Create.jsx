import React, { useState } from 'react'
import axios from 'axios'
import "./App.css";
<<<<<<< HEAD
import './Create.css'
=======
>>>>>>> 96d1f7622ae7d58a0618373b431421d459c3651f
function Create() {
    const [task, setTask] = useState()
    const handleAdd = () => {
        axios.post('http://localhost:3001/add', {task: task})
        .then(result => {
          location.reload()
        })
        .catch(err => console.log(err))
    }
  return (
    <div className="create-form">
        <input type='text' placeholder='Enter Task'onChange={(e) => setTask(e.target.value)}/>
        <button type="button" onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create