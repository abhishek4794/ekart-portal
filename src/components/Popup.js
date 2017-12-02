import React, { Component } from 'react';
import { connect } from "react-redux"
import { SkyLightStateless } from 'react-skylight';

import axios from "axios";

let dialogStyles = {
	width: '40%',
	height: '',
	position: 'absolute',
	top: '40%',
	left: '55%',
	marginTop: '-200px',
	marginLeft: '-25%',
	backgroundColor: '#fff',
	borderRadius: '2px',
	zIndex: 100,
	padding: '15px',
	boxShadow: '0 0 4px rgba(1,1,1,1),0 10px 10px rgba(1,1,1,1)'
}

class Popup extends Component {
	constructor() {
		super();

		this.state = {
			warning: false,
			isVisible: true,
			code: '',
			contents: [],
			selectedGroup: "default",
			playerName: ''
		}
	}

	componentWillReceiveProps = (nextProps) => {
		
		// if(nextProps.player.registering){

		// }
		// else{
		// 	console.log("====-=-=-=-=-=-=-=-=",nextProps.groupList)
		// 	var list=[<option key="0" value="default">default</option>]
		// 	var lists=nextProps.groupList;

		// 	for(var i=0;i<lists.length;i++){
		// 		list.push(
		// 			<option key={i+1} value={lists[i]}>{lists[i]}</option>
		// 		)
		// 	}
		// 	this.setState({
		// 		contents:list
		// 	})
		// 	if(nextProps.player.registered){
		// 		alert("Device Sucessfully Registered")
		// 	}
		// }
	}

	componentWillMount() {

	}
	selectGroup() {
		this.setState({
			selectedGroup: document.getElementById("groupSelector").value
		})
		console.log(this.state.selectedGroup)
	}

	popupClicked() {
		this.setState({ isVisible: false })
	}
	clicked(e) {
		e.preventDefault();

		/*if (this.state.code === "" || this.state.playerName === "") {
			this.setState({ warning: true });
		} else {
			this.setState({ warning: false });*/
			this.addToCart();
			//this.props.dispatch(registerPlayer(this.state.code,this.state.selectedGroup,this.state.playerName))
		//}
	}
	addToCart() {


	/*	axios({
			method: 'post',
			url: localStorage.getItem('apiUrl') + "Registration/apis/v1/validate/validate",
			headers: { appkey: 'DAMoabUemd', "Content-Type": "application/json", vendorId: localStorage.getItem('vendorId') },
			data: {
				code: this.state.code,
				groupName: this.state.selectedGroup,
				deviceName: this.state.playerName

			}
		}).then((response) => {
			console.log(response.data.code)
			console.log("Done")
			if (response.data.messageCode !== 200) {
				alert("Player not found OR Player name already exists")
			}
			else {*/
				this.props.changeState()
				this.popupClicked()
		/*	}
		})
			.catch((err) => {
				console.log(err)
			})*/


	}

	render() {
		return (

			<div>
				<SkyLightStateless
					ref="simpleDialog"
					onOverlayClicked={() => { this.popupClicked(); this.props.changeState() }}
					dialogStyles={dialogStyles}
					isVisible={this.state.isVisible}
					onCloseClicked={() => { this.popupClicked(); this.props.changeState() }}
				>
					<div style={{fontSize:'30px',color:'#e29705'}}>
					<center>Add to Cart</center></div>
					<center>Item Name :- { this.props.selectedProduct.name}</center>
					<center>Item Price :- { this.props.selectedProduct.price }</center>

					<form className="form-signin" onSubmit={() => this.popupClicked()}>
						Please Specify Quantity
						<br />
						<br />
						<input type="text" className="form-control" name="Quantity" placeholder="Quantity" required="" autoFocus="" onChange={(e) => { this.setState({ code: e.target.value }) }} />
						<br />

						Choose a color from the following
						<br />
						<br />
						<select className="form-control" id="groupSelector" onChange={() => this.selectGroup()}>

							{this.state.contents}
						</select>
						<br />
						
						<button className="btn btn-lg btn-primary btn-block a" type="submit" onClick={(e) => this.clicked(e)}>Add To Cart</button>
					</form>
				</SkyLightStateless>
				<br />
				<br />
			</div>

		);
	}
}


function select(store) {
	return {
		player: store.player,
		groupList: store.group.groupList
	}
}

export default connect(select)(Popup)