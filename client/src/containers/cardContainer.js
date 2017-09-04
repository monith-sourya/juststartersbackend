import React, {Component} from 'react'
import Card from '../components/card'
import '../style/cardContainer.css'

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
    },{
        url: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
        title: "Pancake",
        subtitle: "AED 15"
    },{
        url: "https://images.pexels.com/photos/8279/muffin.jpg?w=1260&h=750&auto=compress&cs=tinysrgb",
        title: "Cupcake",
        subtitle: "AED 5"
    },{
        url: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
        title: "Burger",
        subtitle: "AED 20"
    },{
        url: "https://images.pexels.com/photos/196643/pexels-photo-196643.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
        title: "Salad",
        subtitle: "AED 10"
    },{
        url: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
        title: "Pancake",
        subtitle: "AED 15"
    },{
        url: "https://images.pexels.com/photos/8279/muffin.jpg?w=1260&h=750&auto=compress&cs=tinysrgb",
        title: "Cupcake",
        subtitle: "AED 5"
    }]

function generateList(){
    var list = []  
    for (var i in items){
        var item = items[i]
        list.push(
            <Card 
                item={item}
            ></Card>
        )
    }
    return list             
}

class CardContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="cardGrid">
                    <h1 className="title">What's on the menu?</h1>
                    {generateList()}
                </div>
            </div>
        )
    }
}

export default CardContainer

