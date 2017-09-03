import React, { Component } from 'react';
import Header from './components/header'
import Card from './components/card'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './old_style/grid.css'

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header/>
            <Card/>
        </div>
    );
  }
}

export default App;
