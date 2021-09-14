import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './home.js';
import About from './about.js';
import Characters from './characters.js';
import Comics from './comics.js';
import Contact from './contact.js';

ReactDOM.render(
  <BrowserRouter>
  <App />
  <Switch>
  <Route exact path='/' component={Home}/>
  <Route path='/about' component={About}/>
  <Route path='/characters' component={Characters}/>
  <Route path='/comics' component={Comics}/>
  <Route path='/contact' component={Contact}/>
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
