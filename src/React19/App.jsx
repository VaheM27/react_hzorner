import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home'
import Products from '../components/Products/Products'
import Users from '../components/Users/Users'
import Nav from '../components/Nav/Nav'

import "../React19/App.scss"

const App = () => {
    return (
        <div className='App'>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='products' element={<Products />} />
                <Route path='users' element={<Users />} />
            </Routes>
        </div>
    )
}

export default App
