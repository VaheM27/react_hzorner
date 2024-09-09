import React, { useEffect } from "react";

import "./Modal.scss";

const Modal = ({ togModal, deleteItem, firstText, secondText, toDo }) => {
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.className === "Modal") {
        togModal();
      }
      console.log(e.target);
    };
    window.addEventListener("click", handleClick);

    return () => {
      console.log("Komponenty merav");
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="Modal">
      <div className="ModalContent">
        <h1>{toDo}</h1>
        <div className="btns">
          <button onClick={deleteItem}>{firstText}</button>
          {secondText ? <button onClick={togModal}>{secondText}</button> : ""}
        </div>
      </div>
    </div>
  );
};

export default Modal;
