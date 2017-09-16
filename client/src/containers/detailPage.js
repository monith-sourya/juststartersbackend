import React, {Component} from 'react'
import {connect} from 'react-redux'

import ProductOptions from '../components/options'
import Header from '../containers/detailHeader'

import '../style/detailPage.css'

var product = {
    title: "Portobello Mushroom Burger",
    image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    price: 50,
    configs: [
        {
            id: 0,
            title: "Choose you Serving",
            options: [{
                subtitle: "For 4",
                price: 0
            },{
                subtitle: "For 8",
                price: 20
            },{
                subtitle: "For 16",
                price: 40
            }
            ]
        },
        {
            id: 1,
            title: "Pick a Meat",
            options: [{
                subtitle: "No thanks",
                price: 0
            },{
                subtitle: "Chicken",
                price: 10
            },{
                subtitle: "Vegetarian",
                price: 4
            }
            ]
        },
        {
            id: 2,
            title: "Add a Side",
            options: [{
                subtitle: "No thanks",
                price: 0
            },{
                subtitle: "Fries",
                price: 10
            },{
                subtitle: "Curly Fries",
                price: 4
            }
            ]
        },
        {
            id: 3,
            title: "Add a Drink",
            options: [{
                subtitle: "No thanks",
                price: 0
            },{
                subtitle: "Coke",
                price: 10
            },{
                subtitle: "Shake",
                price: 4
            }
            ]
        }
    ]
}

class DetailPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: product.title,
            price: product.price,
            optionsPrice: 0,
            totalPrice: product.price,
            customOption: ""
        }
        this.passToParent = this.passToParent.bind(this)
        this.completeOrder = this.completeOrder.bind(this)
    }
    
    passToParent(value, key){
        this.setState({
            [key]: value
        })
        console.log("passToParent")
        if (key == "optionsPrice"){
            var newTotal = this.state.price + value
            this.setState({
                totalPrice: newTotal
            })
        }
    }
    
    getDefaultOptions(configs){
        var list = []
        for (var i in configs){
            list.push({
                [configs[i].title]: configs[i].options[0]
            })
        }
        console.log("List", list)
    }
    
    completeOrder(){
        console.log("Product added to order")
        // Redux will pass to store
        var order = this.state
        console.log(order)
        // Route to Checkout / Menu...
    }
    
    render()
    {
        return (
            <div>
                <Header></Header>
                            <div className="detailBody">
                <div className="detailLeft">
                    <div className="detailGallery">
                        <img className="detailImage" src={product.image}/>
                    </div>
                    <div className="detailText">
                        <h1 className="detailTitle">{product.title}</h1>
                        <div className="detailDescr">
                            <p className="detailSubtitle">{product.descr}</p>
                            <ul className="detailList">
                                <li>Non Vegetarian</li>
                                <li>Spicy</li>
                                <li>Gluten Free</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="detailRight">
                    <ProductOptions 
                        passToParent={this.passToParent}
                        configs={product.configs}
                        ></ProductOptions>
                    {/*<div className="reviewContainer"></div>*/}
                    <div className="reviewContainer">
                        <button className="buyButton" onClick={this.completeOrder}><div className="buttonTitle">ADD TO CART</div><div className="buttonSubtitle">AED {this.state.price + this.state.optionsPrice}</div> </button>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default DetailPage