import React from "react";
import {BsCheck} from 'react-icons/bs'
import classes from './Check.module.css'

const Check = (props) => {
    return (
        <div className={`${classes.check} ${props.isCompleted ? classes.background : ''}`}>
            {
                props.isCompleted && <BsCheck size={24} />
            }
        </div>
    )
}

export default Check