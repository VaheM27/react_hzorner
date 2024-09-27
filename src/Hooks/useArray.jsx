import React, { useState } from 'react'

const useArray = ({ initialValue }) => {
    const [delSecElm, setDelSecElm] = useState(initialValue)
    const [add, setAdd] = useState(initialValue)
    const [changeSec, setChangeSec] = useState(initialValue)

    const deleteSecondElement = () => {
        let newArr = [...delSecElm]
        newArr.splice(1, 1)
        setDelSecElm(newArr)
    }

    const addFuntion = () => {
        setAdd([...add].shift(7))
    }

    const changeSecElm = () => {
        let newArray = [...changeSec]
        newArray[1] = 9
        setChangeSec(newArray)
    }


    return [delSecElm, deleteSecondElement, add, addFuntion, changeSec, changeSecElm]
}

export default useArray
