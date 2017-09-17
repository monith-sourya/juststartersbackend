import React, {Component} from 'react'
import Card from '../components/card'
import '../style/cardContainer.css'
import {withRouter} from "react-router-dom";

var items = [{
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

class CardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: false,
            item: null
        }
        this.cardClicked = this.cardClicked.bind(this)
        this.generateList = this.generateList.bind(this)
    }
    
    generateList(){
        return items.map((item) => (
                <Card
                    handleClick={this.cardClicked}
                    item={item}
                ></Card>
        ))     
    }
    
    cardClicked(item){
        console.log("User Clicked", item)
        this.props.history.push('/product')
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

export default withRouter(CardContainer)

