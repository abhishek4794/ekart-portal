import axios from "axios";
import { conf } from '../conf.js';

export function login(username,password) {

return function(dispatch) {
  axios({
      method:'post',
      url:conf.baseUrl+'apis/login/login',
      headers:{"Content-Type":"application/json"},
       data:{
          "username":username,
          "password":password
        }
      }).then(function (response) {
            localStorage.setItem('apiBaseUrl', conf.baseUrl);
            dispatch({type: "LOGIN_FULFILLED", payload: response})
 
        })
        .catch(function (error) {
          console.log(error);
      });

  }
}