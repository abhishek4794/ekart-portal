export default function reducer(state={
    cart: [],
    fetching:false,
    fetched:false,
    adding:false,
    added:false,
    deleting:false,
    deleted:false,
    error: null,
    orderPlaced:false,
    totalCost:0
  }, action) {
  	  switch (action.type) {
      case "FETCH_CART": {
        return {...state, fetching: true,list:[],
          fetched:false,
          adding:false,
          added:false,
          deleting:false,
          deleted:false,
          orderPlaced:false
        }
      }
      case "FETCH_CART_REJECTED": {
        return {...state, fetching: false,fetched:false, error: action.payload}
      }
      case "FETCH_CART_FULLFILLED": {
        return {
          ...state,
          error: false,
          fetching:false,
          fetched: true,
          list: action.payload,
          totalCost:action.totalCost
        }
      }
      case "ADD_CART":{
        return {...state, adding: true,added:false}
      }
      case "ADD_CART_FULFILLED":{
        return {...state, adding: true,added:true}
      }
      case "ADD_CART_REJECTED":{
        return {...state, adding: false,added:false}
      }
      case "DELETE_CART":{
        return {...state, deleting: true,deleted:false}
      }
      case "DELETE_CART_FULFILLED":{
        return {...state, deleting: true,deleted:true}
      }
      case "PLACE_ORDERS": {
        return {...state,orderPlaced:false}
      }
      case "PLACE_ORDERS_REJECTED": {
        return {...state, error: action.payload}
      }
      case "PLACE_ORDERS_FULLFILLED": {
        return {...state,orderPlaced:true}
      }
	  default : {
        return state
      }
   }
}
