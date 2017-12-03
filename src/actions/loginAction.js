import axios from "axios";

export function login(username,password) {

return function(dispatch) {
  axios({
      method:'post',
      url:'http://127.0.0.1:4794/apis/login/login',
      headers:{"Content-Type":"application/json"},
       data:{
          "username":username,
          "password":password
        }
      }).then(function (response) {

            dispatch({type: "LOGIN_FULFILLED", payload: response})
 
        })
        .catch(function (error) {
          console.log(error);
      });

  }
}