import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home.js';
import Comics from './pages/comics.js';
import Connect from './pages/connect.js';
import Characters from './pages/characters.js';

import './App.css';

class App extends React.Component {
   render() {
      return (
         <BrowserRouter basename='marvel-mini-universe.netlify.app'>
            <Switch>
               <Route exact path='/' component={Home} />
               {/* <Route path='/about' component={About}/> */}
               <Route path='/characters' component={Characters} />
               <Route path='/comics' component={Comics} />
               <Route path='/contact' component={Connect} />
            </Switch>
         </BrowserRouter>
      )
   }
}

export default App;