import React, { Component } from 'react';
import '../App.css';
import { connect } from "react-redux";
//import createHistory from 'history/createBrowserHistory';
import {login} from "../actions/loginAction.js";


//const history = createHistory()
class Login extends Component {
  constructor(){
      super();

      this.state = {
        username:'',
        password:''
      }
    }

  componentWillReceiveProps = (nextProps) => {
    if(nextProps.loggedIn){

      this.props.history.replace('/ekart/store');

    }
  }
  componentWillMount(){
    localStorage.clear();
    
  }

  doLogin(){
    this.props.dispatch(login(this.state.username,this.state.password))
  }

  renderState(){

      return (
        
        (
            <div className="form-signin">
              <h2 className="form-signin-heading">Please login</h2>
              <input type="text" className="form-control" name="username" placeholder="Username" required="" autoFocus="" onChange={(e)=>{this.setState({username: e.target.value})}} />
              <input type="password" className="form-control" name="password" placeholder="Password" required="" onChange={(e)=>{this.setState({password: e.target.value})}} />      
              <div style={this.state.code===200?{color:"green"}:{color:"red"}}>
                <center>{this.state.loginMessage}</center>
              </div>
              <button className="btn btn-lg btn-primary btn-block" autoFocus onClick={()=>this.doLogin()}>Login</button>   
              
            </div>
        )
      );
    
    
  }
  render() {
    
    return (
      
      <div className="wrapper" >
        {this.renderState()}
      </div>
    );
  }
}
/* <form className="form-signin">  
  </form>*/
function select(store){
  return{
    loggedIn:store.login.loggedIn
  }
}

export default connect(select)(Login)