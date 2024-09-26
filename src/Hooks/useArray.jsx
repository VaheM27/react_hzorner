import { useState } from "react"




const useArray = () =>{
    const [data, setData] = useState([1,87,9,78,4,45])
    const add = ()=>{
        setData([...data,7])
    }
    const changeSec = () =>{
        data[1] = 9
        setData([...data])
    }
    const deleteSec = () =>{
        setData(data.filter((_,index)=>index !== 1))
    }
    const leaveNumbers = () =>{
        setData(data.filter((item)=>{
            if(item > 4){
                return item
            } 
        }))
    }
    const clear = ()=>{
        setData([])
    }

    return[data, {add,changeSec,deleteSec,leaveNumbers,clear}]
}

export default useArray