import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ROUTES from "./Routes";
import { Layouts } from "./Layouts/Layouts";
import { About, Contact, Home, Products, Error, Product } from "./pages";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path={ROUTES.HOME} element={<Layouts />}>
            <Route index element={<Home />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
            <Route path={ROUTES.PRODUCT} element={<Product />} />
            <Route path={ROUTES.PRODUCTS} element={<Products />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
