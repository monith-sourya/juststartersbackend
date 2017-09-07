import React, { Component } from 'react';
import Header from './components/header'
import Card from './components/card'
import CardContainer from './containers/cardContainer'
import DetailPage from './containers/detailPage'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header/>
            <section className='cardSection'>
                <CardContainer/>
            </section>
            <DetailPage/>
        
        </div>
        
    );
  }
}

export default App;
