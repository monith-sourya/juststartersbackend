import React, {Component} from 'react'
import {connect} from 'react-redux'

import '../style/card.css'

class Card extends Component {
    constructor(props) {
        super(props);
    }
    
    render()
    {
        return (
            <div className="cardContainer" 
                 onClick={() => this.props.handleClick(this.props.item)}
                >
                <div className="cardImageContainer">
                    <img className="cardImage" src={this.props.item.url}/>
                </div>
                <div className="cardTitle">
                    {this.props.item.title}
                </div>
                <div className="cardSubtitle">
                    AED {this.props.item.price}
                </div>
            </div>
        )
    }
}

export default Card
