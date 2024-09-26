import React, { useState } from 'react'

export default function useCount({ initialValue, min, max }) {
    const [state, setState] = useState(initialValue)
    const plus = () => setState(state < max ? state + 1 : max)
    const minus = () => setState(state > min ? state - 1 : min)
    return [state, { plus, minus }]
}

