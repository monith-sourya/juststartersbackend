import React, { Component } from 'react';
import Header from './components/header'
import Card from './components/card'
import CardContainer from './containers/cardContainer'
import DetailPage from './containers/detailPage'
import DetailHeader from './containers/detailHeader'
import Checkout from './containers/checkout'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {connect} from 'react-redux';
import {fetchProducts} from './actions';

<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBfZTTzUOX6zSmqMAI5I6cEX_r1x6tW1bM&libraries=places&region=AE"></script>

class App extends Component {
  componentDidMount(){
      this.props.fetchProducts
  }   
    
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route exact path="/" component={() => (
                        <div>
                            <Header/>
                            <section className='cardSection'>
                                <CardContainer/>
                            </section>
                        </div>
                    )}></Route>

                 <Route path='/product/:id' component={() => (
                        <DetailPage></DetailPage>
                )}/>
                
                <Route path='/checkout/' component={() => (
                        <Checkout></Checkout>
                )}/>
                <DetailHeader></DetailHeader>
            </div>
        </BrowserRouter>
    );
  }
}

export default connect(null, fetchProducts)(App);
