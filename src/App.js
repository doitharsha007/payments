import { Component } from 'react';
import {BrowserRouter as Router,Route,Switch}from 'react-router-dom'
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import LoginComponent from './components/LoginComponent';
import Sender from './components/Sender';
import Receiver from './components/Receiver';
import Transaction from './components/Transaction';
import FinalComponent from './components/FinalComponent';
import Output from './components/Output';
import Dashboard from './components/Dashboard';

class App extends Component{
  render(){
  return (
    <div>
      
      <Router>
        <HeaderComponent/>
          <Switch>      
            <Route path="/" exact component={LoginComponent}/>
            <Route path="/sender" component={Sender}/>
            <Route path="/receiver" component={Receiver}/>
            <Route path="/transaction" component={Transaction}/>
            <Route path="/final" component={FinalComponent}/>
            <Route path="/output" component={Output}/>
            <Route path="/dashboard" component={Dashboard}/>
          </Switch>
        <FooterComponent/>
      </Router>
      
    </div>
  );
}
}

export default App;
