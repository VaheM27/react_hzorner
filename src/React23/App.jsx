import React from 'react'
import useArray from '../Hooks/useArray'

import "./App.scss"
const App = () => {

    const [array, deleteSecondElement, addFuntion, changeSecElm] = useArray({
        initialValue: [1, 4, 7, 4, 8, 5, 3],
    })

    return (
        <div className='main'>
            <p>{JSON.stringify(array)}</p>
            <div className="btn">
                <button onClick={addFuntion}>Add7</button>
                <button onClick={deleteSecondElement}>Delete second element</button>
                <button onClick={changeSecElm}>Change second element to 9</button>
            </div>
        </div>
    )
}

export default App
