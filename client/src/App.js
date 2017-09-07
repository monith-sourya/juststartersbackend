import React, { Component } from 'react';
import Header from './components/header'
import Card from './components/card'
import CardContainer from './containers/cardContainer'
import DetailPage from './containers/detailPage'
import Checkout from './containers/checkout'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"></script>

class App extends Component {
  render() {
    return (
        <div className="App">
            {/*<Header/>
            <section className='cardSection'>
                <CardContainer/>
            </section>
            <DetailPage/>*/}
            <Checkout></Checkout>
        
        </div>
        
    );
  }
}

export default App;
