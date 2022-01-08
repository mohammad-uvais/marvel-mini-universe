import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import Home from './pages/home.js';
import Comics from './pages/comics.js';
import Connect from './pages/connect.js';
import Characters from './pages/characters.js';

import './App.css';

class App extends React.Component {
   render() {
      return (
         <HashRouter basename="/marvel-mini-universe">
            <Switch>
               <Route exact path='/' component={Home} />
               {/* <Route path='/about' component={About}/> */}
               <Route path='/characters' component={Characters} />
               <Route path='/comics' component={Comics} />
               <Route path='/contact' component={Connect} />
            </Switch>
         </HashRouter>
      )
   }
}

export default App;