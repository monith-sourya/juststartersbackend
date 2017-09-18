import React, { Component } from 'react';
import Header from './components/header'
import Card from './components/card'
import CardContainer from './containers/cardContainer'
import DetailPage from './containers/detailPage'
import DetailHeader from './containers/detailHeader'
import Checkout from './containers/checkout'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBfZTTzUOX6zSmqMAI5I6cEX_r1x6tW1bM&libraries=places&region=AE"></script>

var items = 
    [{
        url: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
        title: "Burger",
        subtitle: "AED 20"
    },
    {
        url: "https://images.pexels.com/photos/196643/pexels-photo-196643.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
        title: "Salad",
        subtitle: "AED 10"
    },{
        url: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
        title: "Pancake",
        subtitle: "AED 15"
    },
    {
        url: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
        title: "Pancake",
        subtitle: "AED 15"
    },{
        url: "https://images.pexels.com/photos/8279/muffin.jpg?w=1260&h=750&auto=compress&cs=tinysrgb",
        title: "Cupcake",
        subtitle: "AED 5"
    },
    {
        url: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
        title: "Burger",
        subtitle: "AED 20"
    },{
        url: "https://images.pexels.com/photos/196643/pexels-photo-196643.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
        title: "Salad",
        subtitle: "AED 10"
    },
    {
        url: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
        title: "Pancake",
        subtitle: "AED 15"
    },{
        url: "https://images.pexels.com/photos/8279/muffin.jpg?w=1260&h=750&auto=compress&cs=tinysrgb",
        title: "Cupcake",
        subtitle: "AED 5"
    }]

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route exact path="/" component={() => (
                        <div>
                            <Header/>
                            <section className='cardSection'>
                                <CardContainer items={items}/>
                            </section>
                        </div>
                    )}></Route>

                 <Route path='/product/' component={() => (
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

export default App;
