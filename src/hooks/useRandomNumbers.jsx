import { useState } from "react";

export default function useRandomNumbers({ randomCount, min, max }) {
  const [data, setData] = useState(() => {
    return Array.from({ length: randomCount }, () =>
      Math.ceil(Math.random() * (max - min) + min)
    );
  });
  return data;
}
