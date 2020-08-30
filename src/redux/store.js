//Store se conforma de dos métodos (combineReducers y createStore )
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { shopReducer } from "./shop/reducer";

const store = createStore(
  combineReducers({ shopReducer }),
  applyMiddleware(logger)
);

export default store;
