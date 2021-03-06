import React, { Component } from 'react';
import { connect } from "react-redux"

// import Menu from '../components/Menu.js'
import TopMenu from '../components/TopMenu'
import LeftMenu from '../components/LeftMenu'
import {fetchList} from '../actions/storeListActions'
import Popup from '../components/Popup.js'

class Store extends Component {
    constructor(){
        super();
        this.state  = {
            list:[],
            popup:false,
            selectedProduct:{}
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
                        <td data-th="Product Image"><img width={200} height={200} alt={element.id} src={element.imageUrl}></img></td>
                        <td data-th="Name">{element.name}</td>
                        <td data-th="Description">{element.desc}</td>
                        <td data-th="Price">{element.price}</td>
                        <td data-th="Action"> 
                            <button 
                                onClick={()=>this.handleTr(element)} 
                                type="button" 
                                className="btn btn-primary a">
                                    Add to cart
                            </button>
                        </td>
                    </tr>
                    )
                    )
                    
                })
                this.setState({list})
            }
    }
    handleTr(element){
       this.setState({ popup: true ,selectedProduct:element})
    }
    handlePopup() {
        
    }
    changeState() {
        this.setState({
            popup: !this.state.popup
        })
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
                activeMenu={"Store"} 
                history={this.props.history}
            />
            <div id="layout">
                <div className = "heading" >
                    Store
                </div>
                <hr />
                <div style={{padding:'20px'}}>
                                   
                <br></br>

                <div style={{padding:'20px'}}>
                        <div id="tableWrapper" >
                                <table className="rwd-table" >
                                    <thead >

                                        
                                        <th>Product Image</th>
                                        <th>Product Name</th>
                                        <th>Description</th>
                                        <th>Price</th>
                                        <th>Action</th>

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
        list:store.store.list
    }
}

export default connect(select)(Store)

