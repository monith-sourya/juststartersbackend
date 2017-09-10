import React, {Component} from 'react'
import {connect} from 'react-redux'

import '../style/orderSummary.css'

var configs = [
    {}
]

function generateList(){
    var list = []  
    for (var i in configs){
        var option = configs[i]
        list.push(
        ) 
    }
    return list
}

class OrderSummary extends Component {
    render()
    {
        return (
        <div className="order-container">
            <h3>My Order</h3>
            <div className="order-item-div">
                The Original Burger <span className="order-price">AED100</span>
                <ul className="order-details">
                    <li className="order">Serves 8</li>
                    <li className="order">Cheese</li>
                    <li className="order">Medium Rare</li>
                </ul>
            </div>
            <div className="order-item-div">
                The Original Burger <span className="order-price">AED100</span>
                <ul className="order-details">
                    <li className="order">Serves 8</li>
                    <li className="order">Cheese</li>
                    <li className="order">Medium Rare</li>
                </ul>
            </div>
            <div className="order-item-div">
                The Original Burger <span className="order-price">AED100</span>
                <ul className="order-details">
                    <li className="order">Serves 8</li>
                    <li className="order">Cheese</li>
                    <li className="order">Medium Rare</li>
                </ul>
            </div>
        </div>
        )
    }
}

export default OrderSummary