import React, { useReducer } from 'react';
import './App.css';


const initialState = {
  developers: [],
  arr: [12, 22, 14],
  inputValue: '',
  numberInput: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_INPUT_VALUE':
      return { ...state, inputValue: action.payload };
    case 'SET_NUMBER_INPUT':
      return { ...state, numberInput: action.payload };
    case 'ADD_DEVELOPER':
      return {
        ...state,
        developers: [...state.developers, state.inputValue],
        inputValue: '', 
      };
    case 'SHUFFLE_ARRAY':
      return {
        ...state,
        arr: [...state.arr].sort(() => Math.random() - 0.5),
      };
    case 'ADD_NUMBER_TO_ARRAY':
      return {
        ...state,
        arr: [...state.arr, Number(state.numberInput)],
        numberInput: '', 
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <div className="input-section">
        <input
          type="text"
          placeholder="Add Developer"
          value={state.inputValue}
          onChange={(e) =>
            dispatch({ type: 'SET_INPUT_VALUE', payload: e.target.value })
          }
          className="input"
        />
        <button
          onClick={() => dispatch({ type: 'ADD_DEVELOPER' })}
          className="btn"
        >
          Add Developer
        </button>
      </div>

      <div className="developer-list">
        <h3>Developers List:</h3>
        <ul>
          {state.developers.map((dev, index) => (
            <li key={index}>{dev}</li>
          ))}
        </ul>
      </div>

      <div className="array-section">
        <h3>Shuffled Numbers [12, 22, 14, ...]:</h3>
        <input
          type="number"
          placeholder="Add Number"
          value={state.numberInput}
          onChange={(e) =>
            dispatch({ type: 'SET_NUMBER_INPUT', payload: e.target.value })
          }
          className="input"
        />
        <button
          onClick={() => dispatch({ type: 'ADD_NUMBER_TO_ARRAY' })}
          className="btn"
        >
          Add Number
        </button>
        <button
          onClick={() => dispatch({ type: 'SHUFFLE_ARRAY' })}
          className="btn"
        >
          Shuffle Numbers
        </button>
        <ul>
          {state.arr.map((num, index) => (
            <li key={index}>{num}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
