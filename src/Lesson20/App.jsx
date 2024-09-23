import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav/Nav";
import Products from "./Products/Products";
import ROUTES from "../Routes";
import Home from "./Home/Home";
import Detail from "./Detail/Detail";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.PRODUCTS} element={<Products />} />
          <Route path="/products/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
