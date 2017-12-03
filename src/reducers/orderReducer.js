export default function reducer(state={
    list: [],
    fetching:false,
    fetched:false,
    error: null,
    orderPlaced:false
  }, action) {
  	  switch (action.type) {
      case "FETCH_ORDERS": {
        return {...state, fetching: true,list:[],fetched:false,orderPlace:false}
      }
      case "FETCH_ORDERS_REJECTED": {
        return {...state, fetching: false,fetched:false, error: action.payload}
      }
      case "FETCH_ORDERS_FULLFILLED": {
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
