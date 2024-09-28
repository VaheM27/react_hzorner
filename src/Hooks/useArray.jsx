import { useState } from "react";

const useArray = ({ initialValue }) => {
  const [add, setAdd] = useState(initialValue);

  const deleteSecondElement = () => {
    let newArr = [...add];
    newArr.splice(1, 1);
    setAdd(newArr);
  };

  const addFuntion = () => {
    setAdd([...add, Math.round(Math.random() * 20)]);
  };

  const changeSecElm = () => {
    if (add.length > 1) {
      add[1] = 9;
      setAdd([...add]);
    }
  };

  const clearFunction = () => {
    setAdd([])
  }

  const setFunction = () => {
    setAdd([1, 2])
  }

  const leaveFunction = () => {
    setAdd(add.filter(num => num <= 4))
  }

  return [add, deleteSecondElement, addFuntion, changeSecElm, clearFunction, setFunction, leaveFunction];
};

export default useArray;
