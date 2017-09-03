import React, {Component} from 'react'
import {connect} from 'react-redux'
import {selectCard} from '../actions/index'
import {bindActionCreators} from 'redux'

class Card extends Component {
    render()
    {
        return (
            <div className="card-custom">
                <div className="container-img" onClick={()=>this.props.selectCard(this.props.item)}>
                    <img src={this.props.item.url} className="content-img"></img>
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

export default connect(mapStateToProps, mapDispatchToProps)(Card)

//export default Card 