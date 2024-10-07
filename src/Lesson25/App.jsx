import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'


import './App.scss'


const App = () => {

    const dispatch = useDispatch()

    const data = useSelector((state) => state)

    const addTodo = (e) => {
        e.preventDefault()
        if (e.target[0].value) {
            dispatch({ type: 'add', payload: e.target[0].value })
        }
        e.target.reset()
    }

    useEffect(() => {
        axios('http://localhost:3000/todos').then(res => dispatch({ type: 'start', payload: res.data }))
    }, [addTodo])

    const sort = () => {
        return data.sort((a, b) => a.todo.localeCompare(b.todo))
    }

    const del = (id) => {
        dispatch({ type: 'delete', payload: id })
    }

    const checked = (id) => {
        dispatch({ type: 'check', payload: id })
    }


    return (
        <div className='main'>
            <form onSubmit={addTodo}>
                <input type="text" placeholder='Write Todo' />
                <button>Add Todo</button>
            </form>
            <div className='data'>
                <button onClick={sort}>Sort</button>

                {
                    data?.map((item) => {
                        return (
                            <div key={item.id} className='items'>
                                {item.completed ? <p style={{ textDecoration: 'underline' }}>{item.todo}</p> : <p>{item.todo}</p>}
                                {item.completed ? <input type="checkbox" defaultChecked onClick={() => checked(item.id)} />
                                    : <input type="checkbox" onClick={() => checked(item.id)} />
                                }
                                <p onClick={() => del(item.id)}>X</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default App