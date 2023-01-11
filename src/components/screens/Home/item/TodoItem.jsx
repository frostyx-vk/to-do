import React from "react";
import Check from "./Check";
import classes from './TodoItem.module.css'

const TodoItem = (props) => {
    return (
        <button className={classes.item}
        onClick={() => props.changeTodo(props.todo._id)}>
            <Check isCompleted={props.todo.isCompleted}/>
            {props.todo.title}
        </button>
    )
}

export default TodoItem