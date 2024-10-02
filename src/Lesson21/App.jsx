import useArray from "../Hooks/useArray";
import "./App.scss";

const App = () => {
  const [arr, { add, changeSec, deleteSec, leaveNumbers, clear }] = useArray();

  return (
    <div className="man">
      <p>{JSON.stringify(arr)}</p>
      <div className="buttonsDiv">
        <button onClick={add}>Add</button>
        <button onClick={changeSec}>Change second element to 9</button>
        <button onClick={deleteSec}>Delete second element</button>
        <button onClick={leaveNumbers}>Leave numbers less 4</button>
        <button onClick={clear}>Clear</button>
      </div>
    </div>
  );
};

export default App;
