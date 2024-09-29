
import { createContext, useState } from "react";
import One from "./Lesson25/One"

export const MyContext = createContext();

const App = () => {
  const [data, setData] = useState(0);
  const handleClick = () => {
    setData(data + 1)
  };

  console.log(data);
  return (
  <div>
    <MyContext.Provider value={{data,handleClick}}>
     <One data={data} function={handleClick}/> 
      
      </MyContext.Provider>
  </div>
)

};


export default App;
