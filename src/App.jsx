import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Product from "./Components/Product/Product.jsx"
import Detail from './Components/Detail/Detail.jsx';


const App = () => {
    return (
        <Router>
            <nav className="navbar">
                <Link to="/products">Product</Link>
            </nav>
            <Routes>
               
                <Route path="/products" element={<Product />} />
                <Route path="/products/:id" element={<Detail />} />
             
            </Routes>
        </Router>
    );
}

export default App;