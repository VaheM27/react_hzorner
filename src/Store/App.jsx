import { Route, Routes } from "react-router-dom";
import "./App.scss";
import ROUTES from "./Routes";
import Home from "./pages/Home/Home";
import Jewelery from "./pages/Jewelery/Jewelery";
import Electronics from "./pages/Electronics/Electronics";
import Men from "./pages/Men/Men";
import Women from "./pages/Women/Women";
import Error404 from "./pages/Error404/Error404";
import Layout from "./Layout/Layout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={ROUTES.HOME} element = {<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.JEWELWRY} element={<Jewelery />} />
          <Route path={ROUTES.ELECTRONICS} element={<Electronics />} />
          <Route path={ROUTES.MEN} element={<Men />} />
          <Route path={ROUTES.WOMEN} element={<Women />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
