import React, { useState } from "react";
import Shop from "./components/shop";
import Cart from "./components/cart";
import Navbar from "./components/navbar";
import Product from "./components/product";
import store from "./redux/store";
import { toggleCart } from "./redux/shop/actions";

import "./App.css";

export default function App() {
  const { shopReducer } = store.getState();
  const [toggleCart, setToggleCart] = useState(false);
  const products = shopReducer.products;
  return (
    <div className="App">
      <Navbar>
        <img
          onClick={() => store.dispatch(toggleCart())}
          className="cart-icon"
          src="https://image.flaticon.com/icons/svg/102/102276.svg"
          alt="cart"
        />
        <button onClick={() => setToggleCart(!toggleCart)}>Carrito</button>
        {toggleCart ? <Cart /> : null}
      </Navbar>
      <Shop>
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </Shop>
    </div>
  );
}
