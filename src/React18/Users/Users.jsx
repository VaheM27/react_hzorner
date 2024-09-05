import React, { useEffect, useState } from 'react'
import axios from 'axios'

import "./Users.scss"

const Users = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/posts", {
            params: {
                _limit: 10,
            }
        }).then(res => setUser(res.data))
    }, [])

    return (
        <div className='container userBox'>
            {user.map((item) => {
                return (
                    <div className='box'>
                        <p key={item.id}>{item.id}</p>
                        <p>{item.title}</p>
                        <p>{item.body}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Users
