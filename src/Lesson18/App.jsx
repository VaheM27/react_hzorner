import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../components/Modal/Modal"


import "./App.scss";

const App = () => {
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const handleDelete = () => {
    setModal(!modal);
  };

  const getCurrent = (id) => {
    setCurrentId(id);
  };

  const deleteUser = () => {
    setUsers(users.filter((item) => item.id !== currentId));
    handleDelete();
    setCurrentId(null);
  };

  useEffect(() => {
    axios({
      baseURL: "https://jsonplaceholder.typicode.com/",
      url: "users",
      params: {
        _limit: 9,
      },
    }).then((res) => setUsers(res.data));
  }, []);

  return (
    <div className="users">
      {modal ? (
        <Modal handleDelete={handleDelete} deleteUser={deleteUser} />
      ) : null}
      {users.map((item) => {
        return (
          <div key={item.id} className="userCard">
            <p
              onClick={() => {
                handleDelete();
                getCurrent(item.id);
              }}
            >
              X
            </p>
            <p>{item.name}</p>
            <p>{item.username}</p>
            <p>{item.email}</p>
            <p>{item.phone}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
