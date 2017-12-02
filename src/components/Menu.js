import React, { Component } from 'react';
import { connect } from "react-redux"
import '../App.css';
import MetisMenu from 'react-metismenu';
import '../../node_modules/react-metismenu/dist/react-metismenu-standart.css'

//import createHistory from 'history/createBrowserHistory'
//const history = createHistory()

/*class CustomLink extends React.Component {
  constructor() {
    super();
 
    this.onClick = this.onClick.bind(this);
  }
 
  onClick(e) {
    if (this.props.hasSubMenu) this.props.toggleSubMenu(e);
    else {
        history.push(this.props.to)
    }
  }
 
  render() {
    return (
      <button className="metismenu-link" onClick={this.onClick}>
        {this.props.children}
      </button>
    );
  }
};
*/

const content=[
    {
        id:1,
        icon: 'icon-class-name',
        label: 'Network',
        to:'/signage_portal/players',
    },
    {
        id:8,
        parentId:1,
        icon: 'icon-class-name',
        label: 'Players',
        to:'/signage_portal/players',
    },
    {
        id:9,
        parentId:1,
        icon: 'icon-class-name',
        label: 'Groups',
        to:'/signage_portal/groups',          
    },
    {
        id:3,
        icon: 'icon-class-name',
        label: 'Playlists',
        to:'/signage_portal/playlists',   
    },
    {
        id:4,
        icon: 'icon-class-name',
        label: 'Assets',
        to:'/signage_portal/assets',          
    },
    {
        id:5,
        icon: 'icon-class-name',
        label: 'Reports',
        to:'/signage_portal/players',         
    },
    {
        "id": 6,
        "parentId": 5,
        "icon": "icon-class-name",
        "label": "Groups",
        "to": "/signage_portal/report/player"
    },
    {
        "id": 7,
        "parentId": 5,
        "icon": "icon-class-name",
        "label": "Content",
        "to": "/signage_portal/report/asset"
    }
];

class Menu extends Component {
    componentWillMount(){
        console.log(localStorage.getItem('apiUrl'));
    }
	handleLogout() {
   
    localStorage.clear();
    window.location.assign('/signage_portal/')
	}

  	render() {
    	return (
     		<div>
                <div style={{float:'left',color:'orange',padding:'1%'}}>
                    <h1 ><b>DIGITAL SIGNAGE</b></h1>
                </div>
     			<div id='displayName' style={{padding:'1%'}}>
                        <h4  id='username'>{localStorage.getItem('displayName')}</h4> &nbsp;&nbsp;
                        <i id='logout' className="fa fa-sign-out" title='Logout' aria-hidden="true" onClick={()=>this.handleLogout()}></i>
                </div>
                <div id="leftMenu">
		       		<MetisMenu content={content} 
                       activeLinkFromLocation 
                    />
		      	</div>
	      	</div>

    	);
  	}
}


function select(store){
  return{

  }
}

export default connect(select)(Menu)
