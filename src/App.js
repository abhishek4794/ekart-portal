import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux"
//import GetList from './pages/getList.js'

class App extends Component {
  
  render() {
    
    return (
      
      <div className="wrapper">
        <form className="form-signin">       
          <h2 className="form-signin-heading">Please login</h2>
          <input type="text" className="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
          <input type="password" className="form-control" name="password" placeholder="Password" required=""/>      
          <label className="checkbox">
            <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> Remember me
          </label>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>   
        </form>
    </div>
    );
  }
}

function select(store){
  return{
    user:store.user.user,
    userFetched:store.user.fetched,
    list:store.list.data
  }
}

export default connect(select)(App)