import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useFetch = ({ baseURL, target }) => {
    const [state, setState] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        axios({
            baseURL,
            url: target,
        }).then((res) => setState(res.data)).finally(() => setLoading(false))
    }, [baseURL, target])

    return [state, loading]
}

export default useFetch
