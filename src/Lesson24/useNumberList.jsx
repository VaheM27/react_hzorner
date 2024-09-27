import { useState } from "react";

export const useNumberList = (initialList) => {
  const [list, setList] = useState(initialList);

  const addSeven = () => {
    setList([...list, 7]);
  };

  const changeSecondToNine = () => {
    const newList = [...list];
    if (newList.length > 1) {
      newList[1] = 9;
    }
    setList(newList);
  };

  const deleteSecondElement = () => {
    const newList = list.filter((_, index) => index !== 1);
    setList(newList);
  };

  const filterLessThanFour = () => {
    setList(list.filter((num) => num < 4));
  };

  const resetList = () => {
    setList([1, 2]);
  };

  const clearList = () => {
    setList([]);
  };

  return {
    list,
    addSeven,
    changeSecondToNine,
    deleteSecondElement,
    filterLessThanFour,
    resetList,
    clearList,
  };
};
