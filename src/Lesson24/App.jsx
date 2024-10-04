import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";




const App = () =>{

    const [todo,setTodo] = useState('')
    const dispatch = useDispatch()

    const handleAdd = (e) =>{
        e.preventDefault()
        setTodo(e.target[0].value)
        e.target.reset()
        dispatch({type:'add', payload: todo})
    }

    const data = useSelector((state)=>state.data)
    console.log(data)
    return(
        <div>
            <form onSubmit = {handleAdd} >
                <input type="text" />
                <button>Add</button>
            </form>
        
        </div>
    )
}

export default App