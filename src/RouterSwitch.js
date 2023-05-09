import { BrowserRouter, Route, Routes } from "react-router-dom";
import { React, useState } from 'react';
import Home from './Home';
import AboutUs from "./AboutUs";
import ShoppingCart from "./ShoppingCart";
import Shop from "./Shop";
import Header from "./Header";
import { addToCart } from "./appMethods";
import { productsArray } from "./productsArray";

export default function RouterSwitch () {
  const [products, setProducts] = useState(productsArray);
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
          <Route 
            path="/shop"
            products={products} 
            element={
            <Shop products={products} />
            }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}