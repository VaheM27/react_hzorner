import React, { useState } from 'react'

const useRandomNumbers = ({randomCount, max, min}) => {
    const [state, setState] = useState(() => {
        return Array.from({ length: randomCount }, () =>
            Math.round(Math.random() * (max - min) + min)
        )
    })

    return state
}

export default useRandomNumbers
