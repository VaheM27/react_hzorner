import axios from "axios";
import { nanoid } from "nanoid";

const initialState = []


const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'start':
            return [...action.payload]
        case 'add':
            axios.post('http://localhost:3000/todos', {
                todo: action.payload,
                id: nanoid(4),
                complated: false
            })
        case 'delete':
            axios.delete(`http://localhost:3000/todos/${action.payload}`)
        case 'check':
            axios.patch(`http://localhost:3000/todos/${action.payload}`, { 'completed': true })
        default:
            return state
    }
}

export default todoReducer