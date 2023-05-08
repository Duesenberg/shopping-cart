import { BrowserRouter, Route, Routes } from "react-router-dom";
import { React, useState } from 'react';
import Home from './Home';
import AboutUs from "./AboutUs";
import ShoppingCart from "./ShoppingCart";
import Shop from "./Shop";
import Header from "./Header";

export default function RouterSwitch () {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}