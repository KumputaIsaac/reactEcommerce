import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar'
import ProductList from './component/ProductList'
import Details from './component/Details'
import Cart from './component/Cart'
import Default from './component/Default'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Switch>
          <Route exact path="/">
            <ProductList />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route>
            <Default/>
          </Route>
        </Switch>
        </Router>
        
        
      </div>
    )
  }
}
