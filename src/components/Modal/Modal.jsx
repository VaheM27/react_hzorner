import React from 'react'
import "./Modal.css"

const Modal = ({togModal,deletItem}) => {
  return (
    <div className="Modal">
      <div className="ModalContent">
      <h1>guzeq jnjel? </h1>
      <div className='btn'>
      <button onClick={deletItem}>ha</button>
      <button onClick={togModal}>che</button>
      </div>
      </div>
    </div>
  )
}

export default Modal