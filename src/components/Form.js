import React from 'react'
import { useState } from 'react';

function Form(props) {
    const [input, setInput] = useState('');


    const handleSubmit = e => {
        e.preventDeafult();
        
    }

    props.onSubmit({
        text: input
    });



    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Enter a task'
                value={input}
                name='text'
                className='task-input'
            />
            <button className='todo-button'>Add Task</button>
            
      </form>
    );
}

export default Form
