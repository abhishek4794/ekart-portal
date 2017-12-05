import axios from "axios";
import { conf } from '../conf.js';

export function fetchList(){
	
	return function(dispatch){
		dispatch({type:"FETCH_LIST"})
		
		axios({
			method:'GET',
			url:conf.baseUrl+'apis/products/list'
		}).then((response)=>{
			dispatch({type:"FETCH_LIST_FULLFILLED",payload:response.data.data})
		}).catch((err)=>{
			dispatch({type:"FETCH_LIST_REJECTED",payload:err})
			
			console.log(err)
		})
	}
}
