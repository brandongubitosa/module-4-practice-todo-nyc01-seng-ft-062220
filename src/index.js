import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render((
    <Router>
        <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path ="/app" component={App} />
            
        </div> 
    </Router>),
document.getElementById('root')
);



