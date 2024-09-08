import React from 'react'

import "../Modal/Modal.scss"
const Modal = ({ togModal, deleteItem, firstText, secondText, toDo }) => {
    return (
        <div className='Modal'>
            <div className="modalContent">
                <h1>{toDo}</h1>
                <div className="btnes">
                    <button onClick={deleteItem}>{firstText}</button>
                    <button onClick={togModal}>{secondText}</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
