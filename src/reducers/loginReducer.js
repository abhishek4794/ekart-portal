
export default function reducer(state={
    userData: [],
    logging: false,
    loggedIn: false,
    error: null,
  }, action) {
  	  switch (action.type) {
      case "LOGIN": {
        return {...state, logging: true}
      }
      case "LOGIN_REJECTED": {
        return {...state, logging: false, error: action.payload}
      }
      case "LOGIN_FULFILLED": {
        localStorage.setItem('displayName', action.payload.data.displayName);
        localStorage.setItem('uniqueId', action.payload.data.uniqueId);
        return {
          ...state,
          logging: false,
          loggedIn: true,
          userData: action.payload,
        }
      }
	  default : {
        return state
      }
   }
}
