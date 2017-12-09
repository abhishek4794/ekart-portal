import React, { Component } from 'react';
import { connect } from "react-redux"

// import Menu from '../components/Menu.js'
import TopMenu from '../components/TopMenu'
import LeftMenu from '../components/LeftMenu'
import {fetchList} from '../actions/orderActions'
import Popup from '../components/Popup.js'

class Orders extends Component {
    constructor(){
        super();
        this.state  = {
            list:[],
            popup:false,
            selectedProduct:{}
        }
        
    }
    componentWillReceiveProps(nextprops){

        let list = []
        if(nextprops.list.length){
                nextprops.list.map((element,i)=>{
                    let items = []

                    element.items.map((innerelement,j)=>{
                        items.push(
                                <div>
                                 <div className="assetsInfo">
                                                <b>Name</b>: {innerelement.name}<br />
                                            </div>
                                            
                                            <div className="assetsInfo">    
                                                <b>Price: </b> {innerelement.price}
                                            </div>
                                            
                                            <div className="assetsInfo">    
                                                <b>Quantity:</b> {innerelement.quantity}
                                            </div>
                                            <br />
                                 </div>           
                            )
                    })

                    return(
                    list.push(
                         <div className='assetsList' key={element.orderId}>
                                            
                                            
                                            {/* <i  className="fa fa-hand-o-left fa-2x" onClick={(e)=>{this.addToPlaylist(e,element)}}aria-hidden="true"></i> */}
                                            
                                            <div className="assetsInfo">
                                                <b>Order Id</b>: {element.orderId}<br />
                                            </div>
                                            
                                            <div className="assetsInfo">    
                                                <b>Order Date:</b> {element.orderDate}
                                            </div>
                                            
                                            <div className="assetsInfo">    
                                                <b>Total Cost:</b> {element.totalCost}
                                            </div>
                                            <br />
                                            <div className="assetsInfo">    
                                                <b>Items</b> {element.items.length}
                                            </div>
                                            {items}
                                            
                                        </div>

                    )
                    )
                    
                })
                this.setState({list})
            }
    }
 
    componentWillMount(){
        this.props.dispatch(fetchList())
        //this.props.dispatch(startReportsPage()) // To Clear all the flags
       
    }

    componentDidMount(){

    }
    
    render() {
        
        return (
        <div>
            {/* <Menu history={this.props.history}/> */}
            <TopMenu />
            <LeftMenu 
                activeMenu={"Orders"} 
                history={this.props.history}
            />
            <div id="layout">
                <div className = "heading" >
                    Orders
                </div>
                <hr />
                <div style={{padding:'20px'}}>
                                   
                <br></br>

                
                 <div style={{padding:'20px',overflow:'scroll'}}>
                        <div className="assetsList" style={{fontSize:'20px',backgroundColor:'#fba151', color:'black', borderTopLeftRadius:'10px', borderTopRightRadius:'10px'}}>
                                    <center>Orders  
                                        ({this.props.list?
                                            this.props.list.length
                                            :
                                            "0" 
                                        })
                                    </center>
                                </div>
                                {this.state.list}
                        <br></br>

                    </div>

                </div>
            </div>
            {this.state.popup ? <Popup selectedProduct={this.state.selectedProduct} changeState={this.changeState.bind(this)} /> : null}
        </div>
        )
    }
}

function select(store){

    return{
        list:store.orders.list
    }
}

export default connect(select)(Orders)

