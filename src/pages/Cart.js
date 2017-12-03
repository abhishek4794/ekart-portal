import React, { Component } from 'react';
import { connect } from "react-redux"

// import Menu from '../components/Menu.js'
import TopMenu from '../components/TopMenu'
import LeftMenu from '../components/LeftMenu'

import {fetchList,deleteFromCart,placeOrder} from '../actions/cartActions'


class Cart extends Component {
    constructor(){
        super();
        this.state  = {
            list : [],
            totalCost:0
        }
        
    }
    componentWillReceiveProps(nextprops){

        if(nextprops.orderPlaced){
            alert('Order Placed Sucessfully')
            this.props.dispatch(fetchList())
        }

        if(nextprops.list){

            let list = []
            if(nextprops.list.length!==0){                
                    nextprops.list.map((element,i)=>{
                            return(
                                
                                    list.push(
                                        <div className='assetsList' key={element.id}>
                                            
                                            
                                            {/* <i  className="fa fa-hand-o-left fa-2x" onClick={(e)=>{this.addToPlaylist(e,element)}}aria-hidden="true"></i> */}
                                            {<img src={element.imageUrl} className="img-rounded" id="assetsImage"  alt={"Broken"} width={70} height={70} />}
                                            
                                            <div className="assetsInfo">
                                                <b>Name</b>: {element.name}<br />
                                            </div>
                                            
                                            <div className="assetsInfo">    
                                                <b>Quantity:</b> {element.quantity}
                                            </div>
                                            <div className="assetsInfo">    
                                                <b>Price:</b> {element.price}
                                            </div>
                                            <div className="assetsInfo">    
                                                <b>Cost:</b> {element.cost}
                                            </div>
                                            <div className="assetsInfo">    
                                                <b>Color:</b> {element.color}
                                            </div>
                                            <div className="assetsInfo">    
                                              <i className="fa fa-trash-o fa-2x" onClick={(e)=>{this.deleteFromCart(e,element)}} aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    )
                                );
                                               
                    })
                }else{
                    list.push(
                        <div className='assetsList' key={0}>
                            No Contents assigned
                        </div>
                    )
                }

                if(nextprops.deleted){
                    console.log('In deleted')
                    this.props.dispatch(fetchList())
                }
                this.setState({list,totalCost:nextprops.totalCost})

            }
    }
    componentWillMount(){
        
        this.props.dispatch(fetchList()) 
       
    }
    deleteFromCart(e,element){
        this.props.dispatch(deleteFromCart(element))
        // handle Delete From cart
    }
    componentDidMount(){

    }
    handleCharge(){
        // handle Charge

        this.props.dispatch(placeOrder())
    }
    render() {
        
        return (
        <div>
            {/* <Menu history={this.props.history}/> */}
            <TopMenu />
            <LeftMenu 
                activeMenu={this.state.activeMenu} 
                history={this.props.history}
            />
            <div id="layout">
                <div className = "heading" >
                    cart
                </div>
                <hr />
                <div style={{padding:'20px'}}>
                                   
                <br></br>
                Total Cost :- {this.state.totalCost}
                        <center>
                        <button 
                                onClick={()=>this.handleCharge()} 
                                type="button" 
                                className="btn btn-primary a">
                                    Charge
                        </button>
                        </center>
                <div style={{padding:'20px',overflow:'scroll'}}>
                        <div className="assetsList" style={{fontSize:'20px',backgroundColor:'#fba151', color:'black', borderTopLeftRadius:'10px', borderTopRightRadius:'10px'}}>
                                    <center>Cart  
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
        </div>
        )
    }
}

function select(store){

    return{
        list:store.cart.list,
        totalCost:store.cart.totalCost,
        deleted:store.cart.deleted,
        orderPlaced:store.cart.orderPlaced
    }
}

export default connect(select)(Cart)

