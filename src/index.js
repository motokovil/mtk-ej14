import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import App from "./App";
//import store from "./redux/store";

const rootElement = document.getElementById("root");

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
};

//Método que permite suscribir la vista y obtener los últimos cambios sobre el store
//store.subscribe(render);
store.subscribe(render);

render();
