export default function reducer(state={
    cart: [],
    fetching:false,
    fetched:false,
    error: null
  }, action) {
  	  switch (action.type) {
      case "FETCH_CART": {
        return {...state, fetching: true,list:[],fetched:false}
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
      
	  default : {
        return state
      }
   }
}
