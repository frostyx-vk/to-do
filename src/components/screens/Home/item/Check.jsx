import React from "react";
import {BsCheck} from 'react-icons/bs'
import classes from './Check.module.css'

const Check = (isCompleted) => {
    return (
        <div className={classes.check}>
            {
                isCompleted && <BsCheck size={24} style={{color: "grey"}}/>
            }
        </div>
    )
}

export default Check