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
            selectedProduct:{},
            list:[]
        }
        
    }
    componentWillReceiveProps(nextprops){
        console.log(nextprops.list)
        let list = []
        if(nextprops.list.length){
                nextprops.list.map((element,i)=>{
                    
                    return(
                    list.push(
                    <tr key={element.id}  >
                        <td><img width={200} height={200} src={element.imageUrl}></img></td>
                        <td>{element.name}</td>
                        <td>{element.price}</td>
                        <td>{element.quantity}</td>
                    </tr>
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
                activeMenu={this.state.activeMenu} 
                history={this.props.history}
            />
            <div id="layout">
                <div className = "heading" >
                    Orders
                </div>
                <hr />
                <div style={{padding:'20px'}}>
                                   
                <br></br>

                <div style={{padding:'20px'}}>
                        <div id="tableWrapper" >
                                <table className="table table-bordered" >
                                    <thead className="thead">

                                        
                                        <th>Product Image</th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>

                                        {/* <th>Player Group</th> */}


                                    </thead>
                                    <tbody>
                                        {this.state.list}
                                    </tbody>
                                </table>

                            </div>
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

