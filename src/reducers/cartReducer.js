export default function reducer(state={
    cart: [],
    fetching:false,
    fetched:false,
    adding:false,
    added:false,
    deleting:false,
    deleted:false,
    error: null
  }, action) {
  	  switch (action.type) {
      case "FETCH_CART": {
        return {...state, fetching: true,list:[],
          fetched:false,
          adding:false,
          added:false,
          deleting:false,
          deleted:false,
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
	  default : {
        return state
      }
   }
}
