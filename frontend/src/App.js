import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import PCBuilder from './containers/PCBuilder/PCBuilder';
import Checkout from './containers/Checkout/Checkout'
import { Route, Switch } from 'react-router-dom';
import Cart from './containers/Cart/Cart'
import Products from './containers/Products/Products'
import Login from './containers/Login/Login'
import SignOut from './containers/Login/SignOut/SignOut';

class App extends Component{

  render(){
    return(
      <Layout>
        <Switch>
          <Route path="/" exact component={PCBuilder}></Route>
          <Route path="/Checkout" exact component={Checkout}></Route>
          <Route path="/Products" exact component={Products}></Route>
          <Route path="/Cart" exact component={Cart}></Route>
          <Route path="/Login" exact component={Login}></Route>
          <Route path="/Logout" exact component={SignOut}></Route>
        </Switch>
      </Layout>
    );
  }
}

export default App;