export default function reducer(state={
    list: [],
    fetching:false,
    fetched:false,
    error: null
  }, action) {
  	  switch (action.type) {
      case "FETCH_LIST": {
        return {...state, fetching: true,list:[],fetched:false}
      }
      case "FETCH_LIST_REJECTED": {
        return {...state, fetching: false,fetched:false, error: action.payload}
      }
      case "FETCH_LIST_FULLFILLED": {
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
