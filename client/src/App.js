import React, { Component } from 'react';
import Header from './components/header'
import Hero from './components/hero'

import logo from './logo.svg';
import CardList from './containers/card-creator'
import CardDetail from './containers/card-detail'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './style/grid.css'
import './style/style.css'
import './style/card.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Hero/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Just Starters!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
