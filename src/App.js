import React, { useState } from "react";
import Shop from "./components/shop";
import Cart from "./components/cart";
import Navbar from "./components/navbar";
import Product from "./components/product";
import store from "./redux/store";

import "./App.css";

export default function App() {
  const { shopReducer } = store.getState();
  const [toggleCart, setToggleCart] = useState(false);
  const products = shopReducer.products;
  return ( 
    <div className="App">
      <Navbar>
        
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
