import React, { useEffect, useState } from "react";
import "./App.scss";
import axios from "axios";
import Modal from "../components/shared/Modal/Modal";

const App = () => {
  const [data, setData] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    axios({
      baseURL: "https://jsonplaceholder.typicode.com/",
      url: "comments",
      params: {
        _limit: 9,
        _start: 50,
      },
    }).then((res) => setData(res.data));
  }, []);

  const togModal = () => setToggleModal(!toggleModal);

  const getCurrent = (id) => {
    setCurrentId(id);
  };

  const deleteItem = (id) => {
    setData(data.filter((elm) => elm.id !== currentId));
    setCurrentId(null);
    togModal();
  };

  return (
    <div className="container">
      {toggleModal ? (
        <Modal
          togModal={togModal}
          deleteItem={deleteItem}
          firstText={"Yes"}
          secondText={"No"}
          toDo={"Are you sure to delete?"}
        />
      ) : null}
      {data.map((elem) => {
        return (
          <div key={elem.id} className="dataBody">
            <i
              className="bi bi-ban"
              onClick={() => {
                togModal();
                getCurrent(elem.id);
              }}
            ></i>
            <p>{elem.name}</p>
            <p>{elem.email}</p>
            <p>{elem.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
