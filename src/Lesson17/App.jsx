
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Components/Home/Home"
import ROUTES from "../Routes"
import Show from "../Components/Show/Show"


const App = () => {
    return(
        <div>
            <BrowserRouter>
            <Routes>                
                    <Route path="/" element={<Home/>}/>
                    <Route path={ROUTES.SHOW} element={<Show/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )    
}

export default App