import React, {Component} from 'react'
import {connect} from 'react-redux'
import {selectCard} from '../actions/index'
import {bindActionCreators} from 'redux'

class CardDetail extends Component {
    render()
    {
        return (
            <div className="c-detail-container">
                <div className="c-detail-image">
                    <img className="c-detail-img" src={this.props.item.url}></img>
                </div>
                <div className="c-detail-text">
                    <div className="c-detail-context">
                        <h2 className="c-detail-header">{this.props.item.title}</h2>
                        <p className="c-detail-detail">- Burger<br/>- Fries<br/>- Coke<br/>- Non-Veg</p>
                    </div>
                    <div className="c-detail-reviews">
                        <h3 className="c-detail-header">Latest Reviews</h3>
                        <p>- Best food ever⭐⭐⭐⭐⭐<br/>- Wish I had a bigger stomach</p>
                    </div>
                    <div className="c-detail-footer">
                        <button className="c-detail-button">Order now for AED {this.props.item.price}</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        selectCard: selectCard,
    }, dispatch)
}

function mapStateToProps(state){
    return {
        selectedCard: state.activeCard
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardDetail)

//export default Card 