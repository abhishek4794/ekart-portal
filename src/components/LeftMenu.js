import React, { Component } from 'react';

const menuList = ['Store', 'Cart', 'Orders']
const iconsList = [require('../icons/ic_network.png'),require('../icons/ic_playlist.png'),require('../icons/ic_assets.png'),require('../icons/ic_reports.png')]


const url = ['/ekart/store', '/ekart/cart', '/ekart/orders']
class LeftMenu extends Component {
    componentDidMount(){
      
    }

    
	renderMenu(){
        let menu=[];
        menuList.map((element,i)=>{
            
                return(
                    menu.push(
                        <div>
                            <li onClick={()=>{
                                    this.props.history.push(url[i])
                                }}
                                
                                style={this.props.activeMenu===element?styles.liActive:styles.li}>
                                <img src={iconsList[i]} width="20px" height="20px" alt="icon not found"></img>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                {element}
                            </li>
                        </div>
                    )
                );
            
        })
    
        return menu;
    }
	render() {
		return (
			
			<ul id="left" style={styles.ul}>
                {this.renderMenu()}
                {/* <img src={require(""+iconsList[0]+"")} width="20px" height="20px" alt="icon not found"></img>  */}
            </ul>
		);
	}
}
const styles={
    ul:{
		position: 'fixed',
		listStyleType: 'none',
		marginTop: '84px',
		padding: 0,
		overflow: 'hidden',
		backgroundColor: '#337ab8',
		top: 0,
        width: '20%',
        height: '100%'
	},
	li:{
        cursor: 'pointer', 
		color: 'rgba(255,255,255,0.8)',
		backgroundColor:'#337ab8',
		padding: '8px 16px',
		textDecoration: 'none',
    },
    liDrop:{
        cursor: 'pointer', 
		color: 'white',
		backgroundColor:'rgba(4, 63, 115, 0.8)',//#043f73
		padding: '8px 16px',
		textDecoration: 'none',
    },
	liActive:{
        display: 'block',
        cursor: 'pointer',
		color: 'white',
        backgroundColor:'rgba(4, 63, 115, 0.8)',//#043f73
		padding: '8px 16px',
        textDecoration: 'none',
        fontWeight:"bold"
    },
    submenu:{
        cursor: 'pointer',
		color: 'rgba(255,255,255,0.8)',
        backgroundColor:'#337ab8',
        padding: '8px 16px',
		textDecoration: 'none',
	},
	activeSubmenu:{
        cursor: 'pointer',
		color: 'rgba(255,255,255,0.9)',//white,#ffff
        backgroundColor:'rgba(4, 63, 115, 0.5)', //#043f73
		padding: '8px 16px',
        textDecoration: 'none',
        fontWeight:"bold"
	}
	
    
}
export default LeftMenu;