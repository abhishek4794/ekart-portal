import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import loadState from './localStorage'
import reducer from "./reducers"
const state = loadState();
console.log(state)
const middleware = applyMiddleware(promise(),thunk,logger)

const store = createStore(reducer,state,middleware)

//export const history = syncHistoryWithStore(browserHistory, store);
export default store;