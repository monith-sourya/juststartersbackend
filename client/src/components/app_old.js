import React, { Component } from 'react';
import Header from './header'
import Hero from './hero'
import CardList from '../containers/card-creator'
import CardDetail from '../containers/card-detail'

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Hero/>
                <section className='card-section'>
                    <h1 className='grid-title'>Menu</h1>
                    <CardList/>
                </section>

            </div>
        )
    }
}
