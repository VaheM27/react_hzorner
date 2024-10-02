import { createContext, useState } from 'react'
import './App.scss'
import Todo from './Todo/Todo'


const App = () => {

    const context = createContext()
    const [data,setData] = useState([])
    const foo = (e) =>{
        console.log(e)
    }

    return(
        <div>
            <div>
                <input type="text" />
                <button type='submit'>Sumbmit</button>
            </div>

            <Todo/>
        </div>
    )
}

export default App