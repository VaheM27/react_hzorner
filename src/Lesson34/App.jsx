import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersData } from "./store/slice/usersData/API";

export default function App() {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.usersData);

  useEffect(() => {
    dispatch(fetchUsersData());
  }, []);

  return (
    <div>
      {isLoading && <p>Loading....</p>}
      <div>
        {data?.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.id}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
