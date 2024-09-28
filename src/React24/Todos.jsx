import React, { useContext } from 'react'
import { MyContext } from './App'

import "./Todos.scss"

const Todos = () => {
    const { todos, togModal, getCurrent } = useContext(MyContext)
    return (
        <div className='cont'>
            {todos.map((elm, index) => {
                return (
                    <div key={index} className='main'>
                        <p>{todos}</p>
                        <i className="bi bi-x-lg" onClick={() => {
                            togModal();
                            getCurrent(elm.id)
                        }}></i>
                    </div>
                )
            })}
        </div>
    )
}

export default Todos
