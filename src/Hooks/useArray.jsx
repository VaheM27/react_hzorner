import { useState } from "react";

const useArray = ({ initialValue }) => {
  const [add, setAdd] = useState(initialValue);

  const deleteSecondElement = () => {
    let newArr = [...add];
    newArr.splice(1, 1);
    setAdd(newArr);
  };

  const addFuntion = () => {
    setAdd([...add, Math.round(Math.random() * 5)]);
  };

  const changeSecElm = () => {
    let newArray = [...add];
    newArray[1] = 9;
    setAdd(newArray);
  };

  return [add, deleteSecondElement, addFuntion, changeSecElm];
};

export default useArray;
