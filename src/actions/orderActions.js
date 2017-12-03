import axios from "axios";


export function fetchList(){
	
	return function(dispatch){
		dispatch({type:"FETCH_ORDERS"})


		axios({
			method:'POST',
			url:"http://127.0.0.1:4794/apis/order/list",
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

