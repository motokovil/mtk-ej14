import React from "react";
import store from "../redux/store";
import { deleteProduct } from "../redux/shop/actions";

export default function Cart() {
  const { cart } = store.getState().shopReducer;
  console.log(store.getState());
  return (
    <div className="cart">
      {cart.map((element, index) => {
        return (
          <div key={element.id}>
            <img src={element.imgUrl} alt={element.name} />
            <span>{element.name}</span>
            <span>{element.quantity}</span>
            <span onClick={() => store.dispatch(deleteProduct(index))}>x</span>
          </div>
        );
      })}
    </div>
  );
}
