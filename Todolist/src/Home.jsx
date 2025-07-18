import React, { useEffect, useState } from 'react';
import { BsFillTrashFill, BsCircleFill, BsFillCheckCircleFill } from 'react-icons/bs';
import Create from './Create';
import axios from 'axios';
import './Home.css';

function Home() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/get')
            .then(result => {
                if (Array.isArray(result.data)) {
                    setTodos(result.data);
                } else {
                    setTodos([]);
                    console.error("Expected array but got:", result.data);
                }
            })
            .catch(err => {
                console.error("Error fetching todos:", err);
                setTodos([]);
            });
    }, []);

    const handleEdit = (id) => {
        axios.put('http://localhost:3001/update/' + id)
            .then(() => window.location.reload())
            .catch(err => console.log(err));
    };

    const handleDelete = (id) => {
        axios.put('http://localhost:3001/delete/' + id)
            .then(() => window.location.reload())
            .catch(err => console.log(err));
    };

    return (
        <div className="home">
            <h2 className="title">📝 Todo List</h2>
            <Create />
            {
                Array.isArray(todos) && todos.length === 0 ? (
                    <div className="no-record">
                        <h3>No Tasks Found</h3>
                    </div>
                ) : (
                    todos.map(todo => (
                        <div className="task" key={todo._id}>
                            <div className="checkbox" onClick={() => handleEdit(todo._id)}>
                                {todo.done ?
                                    <BsFillCheckCircleFill className="icon check" />
                                    : <BsCircleFill className="icon circle" />
                                }
                                <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
                            </div>
                            <div>
                                <span>
                                    <BsFillTrashFill className="icon delete" onClick={() => handleDelete(todo._id)} />
                                </span>
                            </div>
                        </div>
                    ))
                )
            }
        </div>
    );
}

export default Home;
