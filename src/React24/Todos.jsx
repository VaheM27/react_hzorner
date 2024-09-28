import React, { useContext } from 'react'
import { MyContext } from './App'

import "./Todos.scss"

const Todos = () => {
    const { todos } = useContext(MyContext)
    return (
        <div className='cont'>
            {todos.map((elm, index) => {
                return (
                    <div key={index} className='main'>
                        <p>{todos}</p>
                        <i className="bi bi-x-lg"></i>
                    </div>
                )
            })}
        </div>
    )
}

export default Todos
