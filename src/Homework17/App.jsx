import { Route, Routes } from "react-router-dom"
import Products from "./Products/Products"
import Product from "./Product/Product"


const App = () => {
    return (
        <div>
            <Routes>
                <Route path ='/' element={<Products />} />
                <Route path='/:id' element = {<Product />}/>
            </Routes>
        </div>
    )
}

export default App