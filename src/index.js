import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useUser } from 'hooks';
import Context, { useGetter } from "store";

import App from "./App";
import Register from "pages/auth/register";
import Login from "pages/auth/login";
// import HomePage from './pages/HomePage';
// import ProductPage from "./pages/ProductPage";
// import { ProductDetails } from "components/productDetails/ProductDetails";
// import RouteNotFound from "components/routeNotFound";

// const Guard = ({ component: Component }) => {
//   const { user } = useGetter();
//   return user ? Component : <Navigate to="/login" replace />;
// };


const Container = () => {
  const [user, setUser] = useUser();
  // const [categories, setCategories] = useCategories();
  // const [products, setProducts] = useProduct();
  // const [isCartOpen, setCartOpen] = useState(false);
  // const [cart, setCart] = useState([]);
  // const createOrder = useCreateOrder();




  return (
    <Context.Provider
      value={{ user, setUser }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} >
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);