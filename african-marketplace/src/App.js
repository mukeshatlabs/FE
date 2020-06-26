import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/signup";
import PrivateRoute from "./components/PrivateRoute";
import CatRender from "./CatRender";
import CategoryItem from './CategoryItem';
import ItemList from './components/ItemList'

function App() {
  return (
    <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/itemlist"}>My Items</Link>
              </li>
              <li>
                <Link className='nav-link' to={"/categories"}>Categories Page</Link>
              </li>
              <li>
                <a className='nav-link' href={"https://5ef4299962a7f75903a741d6--africanmarketbuildweek1.netlify.app/"}>Home Page</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route path="/sign-up" component={SignUp} />
            <Route path="/sign-in" component={Login} />
            <PrivateRoute exact path="/itemlist" component={ItemList} />
            {/* <PrivateRoute path='/categories/:catName' component={CategoryItem} />
            <PrivateRoute exact path="/categories" component={CatRender} />             */}
            <Route exact path='/' component={Login} />
          </Switch>
        </div>
      </div>

        <Switch>
          <PrivateRoute path='/categories/:catID' component={CategoryItem} />
          <PrivateRoute exact path="/categories" component={CatRender} /> 
        </Switch> 
    </div>
    </Router>
  );
}

export default App;