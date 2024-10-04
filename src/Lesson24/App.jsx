import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch({ type: "add", payload: e.target[0].value });
    e.target.reset();
  };

  const data = useSelector((state) => state.todo);

  return (
    <div>
      <form onSubmit={handleAdd}>
        <input type="text" />
        <button>Add</button>
      </form>
      {data?.map((elm, index) => {
        return <p key={index}>{elm}</p>;
      })}
    </div>
  );
};

export default App;
