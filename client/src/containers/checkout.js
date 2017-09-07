import React, {Component} from 'react'
import {connect} from 'react-redux'

import '../style/checkout.css'
import Header from '../containers/header'

class Card extends Component {
    constructor(props) {
        super(props);
    }
    
    render()
    {
        return (
            <div>
                <Header></Header>
            </div>
        )
    }
}

export default Card
