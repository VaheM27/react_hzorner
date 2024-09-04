import { BrowserRouter, Route, Routes } from "react-router-dom";
import ROUTES from "../Routes";
import Home from "../components/Home/Home";
import Show from "../components/Show/Show";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={ROUTES.SHOW} element={<Show />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
