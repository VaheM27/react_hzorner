import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Jewelery = () => {
  const [option, setOption] = useState('');

  useEffect(() => {
    axios(`https://fakestoreapi.com/products`)
  }, []);

  return (
    <div>
      <h1>Jewelery</h1>
    </div>
  );
};

export default Jewelery;
