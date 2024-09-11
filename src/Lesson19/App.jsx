
import { useReducer, useState } from 'react'
import './App.scss'
import reducer, { initalvalue } from './Reducer'
import { type } from '@testing-library/user-event/dist/type'




const App = () => {


    const [state, dispatch] = useReducer(reducer, initalvalue)
    const [input, setInput] = useState('')

    const handleAdd = () => {
        dispatch({ type: 'add', payload: input })
    }
    const handleShuffle = (e) => {
        console.log(e)
        dispatch({ type: 'shuffle' })
    }
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleDev = () => {
        dispatch({ type: 'addDev', payload: input })
    }
    const handleChangeUser = () => {
        dispatch({ type: 'changeuser', payload: input })
    }
    const addAge = () => {
        dispatch({ type: 'addAge', payload: input })
    }


    return (
        <div className='main'>
            <div className="inputs">
                <input type="text" placeholder='Username' onChange={handleChange} />
                <button onClick={handleDev}>ADD DEVELOPER</button>
                <button onClick={handleShuffle}>SHUFFLE ARRAY</button>
                <button onClick={handleAdd}>ADD NUMBER</button>
                <button>REMOVE RINGLE DIGITS</button>
                <button onClick={handleChangeUser}>CHANGE USER</button>
                <button onClick={addAge}>ADD AGE</button>
            </div>
            <div>
                <p>{JSON.stringify(state)}</p>
            </div>
        </div>
    )
}

export default App