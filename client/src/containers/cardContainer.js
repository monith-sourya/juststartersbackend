import React, {Component} from 'react'
import Card from '../components/card'
import '../style/cardContainer.css'
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux'

class CardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: false,
            item: null
        }
        this.cardClicked = this.cardClicked.bind(this)
        this.generateList = this.generateList.bind(this)
        window.scrollTo(0, 0)
    }
    
    generateList(){
        if (!this.props.items){
            return <div></div>    
        }
        return this.props.items.Products.map((item) => (
                <Card
                    handleClick={this.cardClicked}
                    item={item}
                ></Card>
        ))     
    }
    
    cardClicked(item){
        console.log("User Clicked", item._id)
        this.props.history.push(`/product/${item._id}`)        
    }

    render() {
        if (!this.props.items){
            return (<div className="loading"></div>)
        }
        
        return (
            <div>
                <div className="cardGrid">
                    <h1 className="title">What's on the menu?</h1>
                    {this.generateList()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        items: state.products
    }
}

export default connect(mapStateToProps)(withRouter(CardContainer))

