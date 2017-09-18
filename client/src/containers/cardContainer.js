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
        if (this.props.items == null){
            return <div></div>    
        }
        console.log("Props", this.props.items)
        return this.props.items.Products.map((item) => (
                <Card
                    handleClick={this.cardClicked}
                    item={item}
                ></Card>
        ))     
    }
    
    cardClicked(item){
        console.log("User Clicked", item)
        this.props.history.push('/product/')
        // Here we set up redux...
    }

    render() {
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

