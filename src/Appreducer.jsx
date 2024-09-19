// import { useReducer, useState } from "react";
// import reducer, { initialState } from "./reducer.js";
// import { ADD, SHUFFLE, DEVELOPER } from "./actionType.js";
// import { addNumber, remove, setAge, shuffle, update } from "./functions.jsx";
// import "./App.css";

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   let randomNumber = Math.floor(Math.random() * (999 - 100 + 1)) + 100;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const value = e.target.elements.username.value.trim();
//     if (value !== "") {
//       dispatch({ type: DEVELOPER, payload: value });
//       e.target.reset();
//     }
//   };

//   return (
//     <div className="App">
//       <div className="first">
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="username"> Enter username</label>
//           <input type="text" id="username" name="username" />

//           <button type="submit"> Add DEveloper</button>
//           <button onClick={() => shuffle(dispatch)}> Shuffle Array</button>
//           <button onClick={() => addNumber(dispatch, randomNumber)}>
//             Add number
//           </button>
//           <button onClick={() => remove(dispatch)}>Remove Single Digits</button>
//           <button onClick={() => update(dispatch)}>Change User</button>
//           <button onClick={() => setAge(dispatch)}>Add age</button>
//         </form>
//       </div>
//       <div className="second">
//         <h2>OUTPUT</h2>
//         <p>developers {JSON.stringify(state.developers)}</p>
//         <p>user {JSON.stringify(state.user)}</p>
//         <p>arr {JSON.stringify(state.arr)}</p>
//       </div>
//     </div>
//   );
// }

// export default App;
