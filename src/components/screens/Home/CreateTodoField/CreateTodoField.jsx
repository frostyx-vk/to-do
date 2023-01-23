import React from "react";
import classes from './CreateTodoField.module.css'
import { useState } from "react";

const CreateTodoField = (props) => {

    const [title, setTitle] = useState('')

    const addTodo = (title) => {
        props.setTodos(prev => [{
            _id: Date.now(),
            title,
            isCompleted: false,
        }, ...prev])
        setTitle('')
    }


    return (

        <div className={classes.input}>
            <input type="text"
                onChange={e => setTitle(e.target.value)}
                value={title}
                onKeyPress={e => e.key === 'Enter' && addTodo(title)}
                className={classes.style}
                placeholder={'Add a task'}
            />
        </div>
    )
}

export default CreateTodoField