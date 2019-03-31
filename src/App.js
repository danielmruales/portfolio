import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './Home/Home';
import Navbar from './Navbar/Nabar'
import Footer from './Footer/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          {/* <Route path='/projects' component={Projects}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/> */}
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
