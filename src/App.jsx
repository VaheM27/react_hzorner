import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import MarketPage from './Lesson22/MarketPage';
import Product from "./Lesson22/components/Product/Product"
import { useNumberList } from './Lesson24/useNumberList';
import Number from './Lesson24/Number'



const App = () => {

  return (
    <div className="App">
      <Number />
      <useNumberList />

    </div>
  );
};

export default App;
