import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsersData } from "./store/slices/usersSlices/userSlices";
import {
  dispatchRemoveUsers,
  dispatchUsers,
} from "./store/slices/usersSlices/actions";

export default function App() {
  const dispatch = useDispatch();
  const getUsers = () => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) =>
      dispatch(dispatchUsers(res.data))
    );
  };

  const users = useSelector(setUsersData);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {users?.map((elm) => {
        return <div key={elm.id}>{elm.name}</div>;
      })}
      <button onClick={() => dispatch(dispatchRemoveUsers())}>
        Remove users
      </button>
    </div>
  );
}
