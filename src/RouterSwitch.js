import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import Home from './Home';
import AboutUs from "./AboutUs";
import ShoppingCart from "./ShoppingCart";
import Shop from "./Shop";

export default function RouterSwitch () {
  return (
    <div className="App">
      <div className="header">
        Hello from Header
      </div>
      <BrowserRouter>
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