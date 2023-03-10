import React from "react";
import classes from "./Home.module.css"
import TodoItem from "./item/TodoItem";
import { useState } from "react";
import CreateTodoField from "./CreateTodoField/CreateTodoField";

const data = [
    {
        _id: 1,
        title: 'Finish the essay collaboration',
        isCompleted: false,
    },
    {
        _id: 2,
        title: 'Sales',
        isCompleted: false,
    },
    {
        _id: 3,
        title: 'Read book',
        isCompleted: false,
    },
    {
        _id: 4,
        title: 'On Monday',
        isCompleted: false,
    }
]

const Home = () => {

    const [todos, setTodos] = useState(data);

    const changeTodo = (id) => {
        const copy = [...todos];
        const current = copy.find(t => t._id === id);
        current.isCompleted = !current.isCompleted;
        setTodos(copy);
    } 

    const removeTodo = (id) => {
        setTodos([...todos].filter(t => t._id !== id));
    }

    return (
        <div className={classes.page}>
            <h1 className={classes.h1}>Todo</h1>
            {todos.map(todo =>
                <TodoItem 
                key={todo._id} 
                todo={todo} 
                changeTodo={changeTodo} 
                removeTodo={removeTodo}
                />)}
            <CreateTodoField setTodos={setTodos} />
        </div>
    )
}

export default Home