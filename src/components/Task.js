import { IconButton } from '@material-ui/core';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useState } from 'react'
import TodoForm from './TodoForm'



const checkTask = (task, props, index) => {
    if (task.isComplete) {
        return (
            <div className='task' key={index}>
                <span className='completed' >{task.text}</span>
                <IconButton onClick={() => props.completeTask(task.id)}>
                    <DoneOutlineIcon color="primary" />
                </IconButton>
                <IconButton onClick={() => props.removeTask(task.id)}>
                    <DeleteIcon />
                </IconButton>
            </div>
        );
    }
    return (
        <div className='task' key={index}>
            <span>{task.text}</span>
            <IconButton onClick={() => props.completeTask(task.id)}>
                <DoneOutlineIcon color="secondary" />
            </IconButton>
            <IconButton onClick={() => props.removeTask(task.id)}>
                <DeleteIcon />
            </IconButton>
        </div>
    );
}

function Task(props) {
    return props.taskList.map((task, index) => (
      <div className="todo-task" key={index}>
        {checkTask(task, props, index)}

        {/* <button onClick={() => props.completeTask(task.id)}>Complete</button> */}
        {/* <button onClick={() => props.removeTask(task.id)}>
          Remove
        </button> */}
        {/* <IconButton onClick={() => props.completeTask(task.id)}>
          <DoneOutlineIcon color='secondary'/>
        </IconButton>
        <IconButton onClick={() => props.removeTask(task.id)}>
          <DeleteIcon />
        </IconButton> */}
      </div>
    ));
}

export default Task
