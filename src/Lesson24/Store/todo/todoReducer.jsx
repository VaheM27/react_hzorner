const initialState = {
    name: []
}


const todoReduce = (state = initialState,action)=>{
    switch (action.type) {
        case 'add':
            return {
                ...state,
                name: action.payload
            }
    
        default:
            return  state
    }
}



export default todoReduce
