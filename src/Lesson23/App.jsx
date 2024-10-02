import { useContext, useEffect, useState } from 'react'
import './App.scss'
import axios from 'axios'
import Nav, { context } from './Nav/Nav.jsx'
import Sec from './Sec/Sec.jsx'


const App = () => {
    return(
        <div>
            <Nav/>
        </div>
    )
}

export default App