import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Users.scss";
import Modal from "../Modal/Modal";

const Users = () => {
  const [user, setUser] = useState([]);
  const [toggleModal, setToggleModal] = useState(false)
  const [currentId, setCurrentId] = useState(null)

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts", {
      params: {
        _limit: 10,
      },
    }).then((res) => setUser(res.data));
  }, []);


  const togModal = () => {
    setToggleModal(!toggleModal)
  }

  const getCurrent = (id) => {
    setCurrentId(id)
  }

  const deleteItem = (id) => {
    setUser(user.filter((elm) => elm.id !== currentId))
    setCurrentId(null);
    togModal()
  }


  return (
    <div className="container userBox">
      {toggleModal ?
        <Modal
          togModal={togModal}
          deleteItem={deleteItem}
          toDo={"Do you want to delete this post?"}
          firstText={"Yes"}
          secondText={"No"}
        />
        : null}
      {user.map((item) => {
        return (
          <div className="box" key={item.id}>
            <i class="bi bi-ban" onClick={() => {
              togModal();
              getCurrent(item.id)
            }}></i>
            <p>{item.id}</p>
            <p>{item.title}</p>
            <p>{item.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
