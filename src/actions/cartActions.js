import axios from "axios";

export function addToCart(quantity,item,color){
	
	return function(dispatch){
		dispatch({type:"ADD_CART"})

		  axios({
		      method:'post',
		      url:'http://127.0.0.1:4794/apis/cart/add',
		       headers:{"Content-Type":"application/json"},
		       data:{
		          quantity,
		          item,
		          color,
		          uniqueId:localStorage.getItem('uniqueId')
		        }
		      }).then(function (response) {
		      	console.log('in response')
		            dispatch({type: "ADD_CART_FULFILLED", payload: response})
		 
		        })
		        .catch(function (error) {
		          console.log(error);
		          dispatch({type: "ADD_CART_REJECTED", payload: error})
		      });

		
	}
}

export function deleteFromCart(item){
	
	return function(dispatch){
		dispatch({type:"ADD_CART"})

		  axios({
		      method:'post',
		      url:'http://127.0.0.1:4794/apis/cart/delete',
		       headers:{"Content-Type":"application/json"},
		       data:{
		          item,
		          uniqueId:localStorage.getItem('uniqueId')
		        }
		      }).then(function (response) {
		      	console.log('in response')
		            dispatch({type: "DELETE_CART_FULFILLED", payload: response})
		 
		        })
		        .catch(function (error) {
		          console.log(error);
		          dispatch({type: "DELETE_CART_REJECTED", payload: error})
		      });

		
}
}			

export function fetchList(){
	
	return function(dispatch){
		dispatch({type:"FETCH_CART"})
	
		axios({
			method:'POST',
			url:'http://127.0.0.1:4794/apis/cart/list',
			headers:{"Content-Type":"application/json"},
			data:{
				uniqueId:localStorage.getItem('uniqueId')
			}
		}).then((response)=>{
			console.log(response)
			dispatch({type:"FETCH_CART_FULLFILLED",payload:response.data.data,totalCost:response.data.totalCost})
		}).catch((err)=>{
			dispatch({type:"FETCH_CART_REJECTED",payload:err})
			
			console.log(err)
		})
	}
}

export function placeOrder(){
	
	return function(dispatch){
		dispatch({type:"PLACE_ORDERS"})


		axios({
			method:'POST',
			url:"http://127.0.0.1:4794/apis/order/place",
			headers:{ "Content-Type":"application/json"},
			data:{
				uniqueId:localStorage.getItem('uniqueId')
			}
		}).then((response)=>{
			dispatch({type:"PLACE_ORDERS_FULLFILLED",payload:response.data.message})
		}).catch((err)=>{
			dispatch({type:"PLACE_ORDERS_REJECTED",payload:err})
			
			console.log(err)
		})
	}
}

