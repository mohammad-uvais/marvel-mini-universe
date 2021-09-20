import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './home.js';
// import About from './about.js';
import Characters from './characters.js';
import Comics from './comics.js';
import Contact from './contact.js';


class App extends React.Component {
  render() {
     return (
        <BrowserRouter basename={process.env.mohammad-uvais.github.io/marvel-mini-universe/ }>
        <Navbar />
        <Switch>
           <Route exact path='/' component={Home}/>
           {/* <Route path='/about' component={About}/> */}
           <Route path='/characters' component={Characters}/>
           <Route path='/comics' component={Comics}/>
           <Route path='/contact' component={Contact}/>
        </Switch>
        </BrowserRouter>       
     )
  }
}

export default App;