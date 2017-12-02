import axios from "axios";
import conf from "../conf"
export function login(username,password) {

return function(dispatch) {
  axios({
      method:'post',
      url:conf.env.url,
      headers:{appkey:'DAMoabUemd',"Content-Type":"application/json"},
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