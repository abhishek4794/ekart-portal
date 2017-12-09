import React, { Component } from 'react';


class TopMenu extends Component {
	handleLogout() {
        
         localStorage.clear();
         window.location.assign('/ekart/')
    }
	render() {
		return (

        <ul className="custom-menu-bar" style={styles.ul}>
			<li style={styles.li}><div id="brandName">E Kart</div></li>
			{/* <font size="6"><b></b></font> */}
            <li onClick={() => this.handleLogout()} style={styles.user}>{localStorage.getItem('displayName')} <i style={{float:'right'}} className="fa fa-sign-out" aria-hidden="true"></i></li>
        </ul>
			
		);
	}
}
const styles={
	ul:{
		position: 'fixed',
		listStyleType: 'none',
		margin: 0,
		overflow: 'hidden',
		backgroundColor: '#337ab8',
		top: 0,
		width: '100%',
	},
	li:{
		float: 'left',
		color: '#fcce14',
		padding: '17px',
		fontSize: '90px'
	
	},
	user:{
		float:'right',
		padding:'26px',
		color:'white',
		marginTop: '7px',
        cursor: 'pointer',

	}
}
export default TopMenu;
