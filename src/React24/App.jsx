import React, { createContext, useState } from 'react'

import "./App.scss"
import Todos from './Todos'

export const MyContext = createContext()

const App = () => {
    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState("")

    const addTodo = () => {
        if (newTodo.trim()) {
            setTodos([...todos, newTodo])
            setNewTodo("")
        }
    }
    return (

        <div className='cont'>
            <input type="text" placeholder='Add todos' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            <button onClick={addTodo}>ADD TODO</button>
            <MyContext.Provider value={{ todos, addTodo }}>
                <Todos />
            </MyContext.Provider>
        </div>
    )
}

export default App
