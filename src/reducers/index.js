import { combineReducers } from "redux"

import login from "./loginReducer"
import store from "./storeReducer"
import cart from "./cartReducer"
import orders from "./orderReducer"
export default combineReducers({
  login,
  store,
  cart,
  orders
})