import React, { Component } from 'react';
import { connect } from "react-redux"
import { SkyLightStateless } from 'react-skylight';
import { addToCart } from '../actions/cartActions.js'



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
			isVisible: true,
			quantity: 1
		}
	}

	componentWillReceiveProps = (nextProps) => {
		console.log(nextProps.cart.added)
		if(nextProps.cart.added){
			alert('Item Added to cart')
			this.props.changeState()
			this.popupClicked()
		}
	}

	componentWillMount() {

	}
	

	popupClicked() {
		this.setState({ isVisible: false })
	}
	clicked(e) {
		e.preventDefault();

		
			this.props.dispatch(addToCart(parseInt(this.state.quantity),this.props.selectedProduct));
		
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
						<input type="number" defaultValue={1} className="form-control" name="Quantity" placeholder="Quantity" required="" autoFocus="" onChange={(e) => { this.setState({ quantity: e.target.value }) }} required/>
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
		cart: store.cart
	}
}

export default connect(select)(Popup)