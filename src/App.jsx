import { Route, Routes } from 'react-router-dom';

import Nav from './React18/Nav/Nav';
import Home from './React18/Home/Home';
import Products from './React18/Products/Products';
import Users from './React18/Users/Users';

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path='users' element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
