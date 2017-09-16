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
            total: 0
        }
        this.retrieve = this.retrieve.bind(this)
    }
    
    retrieve(options, key){
        this.setState({
            [key]: options
        })
        console.log("Retrieve")
    }
    
    render()
    {
        return (
            <div>
                <Header></Header>
                            <div className="detailBody">
                <div className="detailLeft">
                    <div className="detailGallery">
                        <img className="detailImage" src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"/>
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
                        retrieve={this.retrieve}
                        configs={product.configs}
                        ></ProductOptions>
                    {/*<div className="reviewContainer"></div>*/}
                    <div className="reviewContainer">
                        <button className="buyButton"><div className="buttonTitle">Yalla, bring it home</div><div className="buttonSubtitle">AED {product.price + this.state.total}</div> </button>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default DetailPage