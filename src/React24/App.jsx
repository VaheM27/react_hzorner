import React, { createContext, useState } from 'react'
import Todos from './Todos'
import Modal from "../components/Modal/Modal"

import "./App.scss"

export const MyContext = createContext()

const App = () => {
    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState("")
    const [toggleModal, setToggleModal] = useState(false)
    const [currentId, setCurrentId] = useState(null)

    const addTodo = () => {
        if (newTodo.trim()) {
            setTodos([...todos, newTodo])
            setNewTodo("")
        }
    }
    const togModal = () => {
        setToggleModal(!toggleModal)
    }

    const getCurrent = (id) => {
        setCurrentId(id)
    }

    const delList = () => {
        setNewTodo(newTodo.filter((elm) => elm.id !== currentId))
        setCurrentId(null)
        togModal()
    }

    return (
        <div className='cont'>
            <input type="text" placeholder='Add todos' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            <button onClick={addTodo}>ADD TODO</button>
            <MyContext.Provider value={{ todos, addTodo, togModal, delList, getCurrent }}>
                {toggleModal ?
                    <Modal
                        togModal={togModal}
                        delList={delList}
                        toDo={"Do you want to delete this post?"}
                        firstText={"Yes"}
                        secondText={"No"}
                    />
                    : null}
                <Todos />
            </MyContext.Provider>
        </div>
    )
}

export default App
