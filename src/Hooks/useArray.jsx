import { useState } from "react";

const useArray = () => {
  const [data, setData] = useState(() => {
    return Array.from({ length: 7 }, () => {
      return Math.ceil(Math.random() * (30 - 10) + 10);
    });
  });

  const add = () => {
    setData([...data, 7]);
  };

  const changeSec = () => {
    data[1] = 9;
    setData([...data]);
  };

  const deleteSec = () => {
    setData(data.filter((_, index) => index !== 1));
  };

  const leaveNumbers = () => {
    setData(
      data.filter((item) => {
        if (item > 4) {
          return item;
        }
      })
    );
  };

  const clear = () => {
    setData([]);
  };

  return [data, { add, changeSec, deleteSec, leaveNumbers, clear }];
};

export default useArray;
