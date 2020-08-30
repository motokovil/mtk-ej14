import React from "react";
import { carrito } from "../redux/shop/actions";
import store from "../redux/store";
export default function Product(props) {
  return (
    <div className="product shadow">
      <h2>{props.product.name}</h2>
      <img src={props.product.imgUrl} alt={props.name} />
      <h5>{props.product.price}</h5>
      <p>{props.product.description}</p>
      <button
        className="btn bold"
        onClick={() => store.dispatch(carrito(props.product.id))}
      >
        Agregar
      </button>
    </div>
  );
}
