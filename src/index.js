import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
//import * as serviceWorker from './serviceWorker';

import Home from './Home'
import About from './About'
import Nav from './Component/Nav'
import Footer from './Component/Footer'
import PlantDatas from './PlantDatas'
import LitchiProducts from './LitchiProducts'
import LitchiCulture from './LitchiCulture'


ReactDOM.render((
    <Router>
        <Nav className="navbar"></Nav>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/PlantDatas" component={PlantDatas} />
        <Route path="/LitchiProducts" component={LitchiProducts} />
        <Route path="/LitchiCulture" component={LitchiCulture} />
        <Footer></Footer>
    </Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

