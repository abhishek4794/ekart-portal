import axios from "axios";


export function fetchList(){
	
	return function(dispatch){
		dispatch({type:"FETCH_ORDERS"})

		let list = [
			{
				id:'id1',
				name:'OnePlus5',
				imageUrl:'https://cdn2.gsmarena.com/vv/pics/oneplus/oneplus-5-midnight-black-1.jpg',
				quantity:1,
				price:30000
			},
			{
				id:'id2',
				name:'iphone8',
				quantity:1,
				imageUrl:'https://i.amz.mshcdn.com/zQ5EORq3gRLBzlFRKDbSYb4VATA=/fit-in/1200x9600/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F595423%2Fb3763d14-9f7d-4dbe-9f17-926316b6bdf5.jpg',
				price:120000
			}
		]

		dispatch({type:"FETCH_ORDERS_FULLFILLED",payload:list})
	/*	axios({
			method:'POST',
			url:localStorage.getItem('apiUrl')+"Analytics/apis/v1/reports/summary",
			headers:{appkey:'DAMoabUemd',"Content-Type":"application/json",vendorId:localStorage.getItem('vendorId')},
			data:{
				type,subType,gte:gte.getTime(),lte:lte.getTime(),groupName,playlist
			}
		}).then((response)=>{
			dispatch({type:"FETCH_SUMMARY_FULLFILLED",payload:response.data.data})
		}).catch((err)=>{
			dispatch({type:"FETCH_SUMMARY_REJECTED",payload:err})
			
			console.log(err)
		})*/
	}
}
