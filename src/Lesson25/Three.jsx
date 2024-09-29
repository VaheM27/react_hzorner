import { useContext } from "react"
import { MyContext } from "../App"

import './Three.css'

export default function Three() {

    let number = useContext(MyContext)
  return (
    <div>
      <h1>Component Three</h1>
      <p>Number : {number.data}</p>
      <button onClick={number.handleClick}>Click</button>
    </div>
  )
}
