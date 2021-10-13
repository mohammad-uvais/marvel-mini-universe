import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import './App.css';
import Home from './Home.js';
// import About from './about.js';
import Characters from './Characters.js';
import Comics from './Comics.js';
import Connect from './Connect.js';


class App extends React.Component {
  render() {
     return (
        <HashRouter basename="/marvel-mini-universe">        
        <Switch>
           <Route exact path='/' component={Home}/>
           {/* <Route path='/about' component={About}/> */}
           <Route path='/characters' component={Characters}/>
           <Route path='/comics' component={Comics}/>
           <Route path='/contact' component={Connect}/>
        </Switch>
        </HashRouter>   
     )
  }
}

export default App;