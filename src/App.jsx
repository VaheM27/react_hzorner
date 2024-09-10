import { useEffect,useState } from 'react';
import axios from "axios"
import Modal from './components/Modal/Modal.jsx';
import './App.css';


function App() {
const[data,setData]=useState([])
const[toggleModal,setToggleModal]=useState(false)
const[currentId,setcurrentId]=useState(null)

  
useEffect(()=>{
axios({
  baseURL:"https://jsonplaceholder.typicode.com/",
  url:"comments",
  params:{_limit:9
  }
}).then((res)=>setData(res.data))
},[]);

const togModal=()=>setToggleModal(!toggleModal)
const getCurrent=(id)=>{
  setcurrentId(id)
}

const deletItem=(id)=>{
  setData(data.filter((elem)=>elem.id!=currentId))
  togModal()
  setcurrentId(null)
}

   return <div className="container">
     
    {toggleModal ? <Modal  togModal={togModal} deletItem={deletItem}/>  : null}
    {
      data.map((elem)=>{
        return(
          
          <div key={elem.id} className="dataBody" >
            <i class="bi bi-ban" onClick={()=>{
              togModal()
              getCurrent(elem.id)
            }}></i>
            <p>{elem.name}</p>
            <p>{elem.email}</p>
            <p>{elem.body}</p>

          </div>
        )
      })
    }
   </div>
  
}

export default App;
