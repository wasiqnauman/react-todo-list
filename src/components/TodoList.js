import { Container } from '@material-ui/core'
import React, { useState } from 'react'
import Task from './Task'
import TodoForm from './TodoForm'






// import 'clearblade-js-client/lib/mqttws31'
// import { ClearBlade } from 'clearblade-js-client'

// const cb = new ClearBlade();

// cb.init({
// https: "platform.clearblade.com", // e.g., 'https://platform.clearblade.com'
//   systemKey: "theSystemKey",
//   systemSecret: "theSystemSecret",
//   email: "userEmail", // use registerEmail instead if you wish to create a new user
//   password: "userPassword",
//   callback: initCallback,
// });

// function initCallback(err, authInfo) {
//   // err is a boolean, authInfo is an object containing email and authToken
//   if (err) {
//     throw new Error(cb);
//   } else {
//     console.log("successfully inited ClearBlade");
//   }
// }


function TodoList() {
    const [tasks, setTasks] = useState([])


    const addTask = task => {
        // check if the task is empty
        if (!task.text || /^\s*$/.test(task.text)) {
            return
        }

        // add the current task to the list of tasks
        const newTasks = [task, ...tasks]
        setTasks(newTasks)

        console.log(task, ...tasks)
    }

    
    const completeTask = id => {
        let updatedTasks = tasks.map(task => {
            if (task.id === id)
                task.isComplete = !task.isComplete
            return task
        })
        setTasks(updatedTasks)
    }
    const removeTask = id => {
        const newTaskList = [...tasks].filter(task => task.id !== id)
        setTasks(newTaskList)
    }

    return (
      <Container>
        <div>
          <h1>Tasks </h1>
          <TodoForm onSubmit={addTask} />
          <Task
            taskList={tasks}
            completeTask={completeTask}
            removeTask={removeTask}
          />
        </div>
      </Container>
    );
}

export default TodoList
