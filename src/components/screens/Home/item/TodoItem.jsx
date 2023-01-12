import React from "react";
import Check from "./Check";
import classes from './TodoItem.module.css'
import { BsTrash } from 'react-icons/bs'

const TodoItem = (props) => {
    return (
        <div className={classes.item}>
            <button onClick={() => props.changeTodo(props.todo._id)} className={classes.removeItem}>
                <Check isCompleted={props.todo.isCompleted} />
                <span className={`${props.todo.isCompleted && classes.checkLineThrough}`} >{props.todo.title}</span>
            </button>
            <button onClick={() => props.removeTodo(props.todo._id)}>
                <BsTrash size={18} />
            </button>
        </div>
    )
}

export default TodoItem