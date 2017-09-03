import React, {Component} from 'react'
import {connect} from 'react-redux'

import '../style/card.css'

class Card extends Component {
    render()
    {
        return (
            <div className="cardContainer">
                <div className="cardImageContainer">
                    <img className="cardImage" src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"/>
                </div>
                <div className="cardTitle">
                    Burger
                </div>
                <div className="cardSubtitle">
                    Classic, Rich, Juicy
                </div>
            </div>
        )
    }
}

export default Card
