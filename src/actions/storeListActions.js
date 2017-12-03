import axios from "axios";


export function fetchList(){
	
	return function(dispatch){
		dispatch({type:"FETCH_LIST"})
		
		axios({
			method:'GET',
			url:'http://127.0.0.1:4794/apis/products/list'
		}).then((response)=>{
			dispatch({type:"FETCH_LIST_FULLFILLED",payload:response.data.data})
		}).catch((err)=>{
			dispatch({type:"FETCH_LIST_REJECTED",payload:err})
			
			console.log(err)
		})
	}
}
