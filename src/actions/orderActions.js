import axios from "axios";
import { conf } from '../conf.js';

export function fetchList(){
	
	return function(dispatch){
		dispatch({type:"FETCH_ORDERS"})


		axios({
			method:'POST',
			url:conf.baseUrl+"apis/order/list",
			headers:{ "Content-Type":"application/json"},
			data:{
				uniqueId:localStorage.getItem('uniqueId')
			}
		}).then((response)=>{
			console.log(response.data.data,'<--- response.data.data')
			dispatch({type:"FETCH_ORDERS_FULLFILLED",payload:response.data.data})
		}).catch((err)=>{
			dispatch({type:"FETCH_ORDERS_REJECTED",payload:err})
			
			console.log(err)
		})
	}
}

