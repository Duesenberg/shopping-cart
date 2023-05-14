import { BrowserRouter, Route, Routes } from "react-router-dom";
import { React, useState } from 'react';
import Home from './Home';
import AboutUs from "./AboutUs";
import ShoppingCart from "./ShoppingCart";
import Shop from "./Shop";
import Header from "./Header";
import { addToCart, getQuantityValue, removeFromCart } from "./appMethods";
import { productsArray } from "./productsArray";

export default function RouterSwitch () {
  const [products, setProducts] = useState(productsArray);
  const [cart, setCart] = useState([]);
  const [itemsInCart, setItemsInCart] = useState(0);

  const sumItemsInCart = (cart) => {
    let count = 0;
    cart.forEach(item => {count += item.amount * 1;});
    setItemsInCart(count);
  }

  const populateCart = (productIndex, cart, inputId) => {
    let quantity = getQuantityValue(productIndex, inputId);
    let newCart = addToCart(productIndex, cart, quantity);
    setCart(newCart);
  }

  const removeItemFromCart = (cart, e) => {
    const newCart = removeFromCart(cart, e);
    setCart(newCart);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header 
          cart={cart}
          itemsInCart={itemsInCart}
          sumItemsInCart={sumItemsInCart} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route 
            path="/shoppingcart"
            element={
            <ShoppingCart 
              cart={cart} 
              removeItemFromCart={removeItemFromCart}
              sumItemsInCart={sumItemsInCart}
              />}></Route>
          <Route 
            path="/shop"
            element={
            <Shop 
              products={products}
              cart={cart}
              populateCart={populateCart}
              sumItemsInCart={sumItemsInCart} />
            }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}