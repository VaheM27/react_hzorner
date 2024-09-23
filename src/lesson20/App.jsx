import React, { useReducer, useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductDetails from "../Components/Detaliss/detalis";
import Modal from "../Components/Modal/modal";
import "./App.css";

const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        sorted: action.payload,
      };
    case "SORT_PRODUCTS":
      const sortedProducts = [...state.sorted].sort((a, b) => {
        return state.sortOrder === "asc"
          ? a.price - b.price
          : b.price - a.price;
      });
      return {
        ...state,
        sorted: sortedProducts,
        sortOrder: state.sortOrder === "asc" ? "desc" : "asc",
      };
    case "DELETE_PRODUCT":
      const updatedProducts = state.sorted.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...state,
        products: updatedProducts,
        sorted: updatedProducts,
      };
    default:
      return state;
  }
};

const App = () => {
  const initialState = {
    products: [],
    sorted: [],
    sortOrder: "asc",
  };

  const [state, dispatch] = useReducer(productReducer, initialState);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        dispatch({ type: "SET_PRODUCTS", payload: res.data });
      })
      .catch((err) => console.log(err));
  }, []);

  const sortByPrice = () => {
    dispatch({ type: "SORT_PRODUCTS" });
  };

  const handleDelete = (id) => {
    setSelectedProductId(id);
    setModalOpen(true);
  };

  const confirmDelete = () => {
    dispatch({ type: "DELETE_PRODUCT", payload: selectedProductId });
    setModalOpen(false);
  };

  return (
    <Router>
      <nav className="navbar">
        <Link className="navButton" to="/">
          Home
        </Link>
        <button className="navButton">About</button>
        <button className="navButton">Contact</button>
        <button className="navButton">Products</button>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <button onClick={sortByPrice} className="sortButton">
                Sort by Price (
                {state.sortOrder === "asc" ? "Low to High" : "High to Low"})
              </button>

              <div className="productList">
                {state.sorted.map((product) => (
                  <div key={product.id} className="productCard">
                    <Link to={`/product/${product.id}`}>
                      <img
                        src={product.image}
                        alt={product.title}
                        className="productImage"
                      />
                    </Link>
                    <h3>{product.title}</h3>
                    <p>Price: ${product.price}</p>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="deleteButton"
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>

              <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <p>Are you sure you want to delete this product?</p>
                <button onClick={confirmDelete}>Yes</button>
                <button onClick={() => setModalOpen(false)}>No</button>
              </Modal>
            </div>
          }
        />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
