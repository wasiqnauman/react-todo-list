import { Button, TextField } from '@material-ui/core';
import React from 'react'
import { useState, useRef, useEffect } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');
    // automatically focus on the input field
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })



    const handleChange = e => {
        setInput(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            // get a random number as the id
            id: Math.floor(Math.random() * 10000),
            text: input,
            isComplete: false
            
        })
        setInput('')
    }

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {/* <input
                type='text'
                placeholder='Add a task'
                value={input}
                name='test'
                className='todo-input'
                onChange={handleChange}
                ref={inputRef}
            /> */}
            <TextField
                variant='outlined'
                type='text'
                placeholder='Add a task'
                value={input}
                name='text'
                onChange={handleChange}
                ref={inputRef}
                size='small'
                />
            {/* <button className='todo-button'>Add a task</button> */}
            <Button type='submit' variant='contained' >Add</Button>
            
        </form>
    )
}

export default TodoForm
