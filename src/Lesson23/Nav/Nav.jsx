import { createContext, useState } from 'react'
import './Nav.scss'
import App from '../App'
import Sec from '../Sec/Sec'

export const context = createContext()

const Nav = () => {
    const [city, setCity] = useState('Yerevan')
    const search = (e) => {
        e.preventDefault()
        setCity(e.target[0].value)
        e.target.reset()
    }
    return (
        <div className='mainNav'>
            <form onSubmit={search}>
                <input type="text" placeholder='Search City' />
                <button type='Submit'>Search City</button>
                
            </form>
            <context.Provider value={city}>
                <Sec />
            </context.Provider>
        </div>
    )
}

export default Nav