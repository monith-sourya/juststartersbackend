import React, {Component} from 'react'
import {connect} from 'react-redux'

import '../style/orderSummary.css'

var configs = [
    {
        title: "The Original Burger",
        options:['Serves 8', 'Extra Cheese', 'Medium Rare'],
        price: 85
    },
    {
        title: "Samosa Chaat",
        options:['Serves 4', 'Extra Chutney'],
        price: 45
    },
    {
        title: "Paneer Grill",
        options:['Serves 1', 'Add Sauce', '2x Coca Cola'],
        price: 35
    },
]

var accounts = {
    subtotal: 0,
    tip: 5,
    deliveryCharge: 10
}

class OrderSummary extends Component {
     constructor(props) {
        super(props)
        this.generateList = this.generateList.bind(this)
        this.generateOptions = this.generateOptions.bind(this)
    }
    
    generateList(){
        var list = []  
        accounts.subtotal = 0
        for (var i in this.props.cart){
            var option = this.props.cart[i]
            accounts.subtotal += option.price
            list.push(
                <div className="order-item-div">
                    <div className="order-title">
                        <div className="order-name">
                            {option.title}
                        </div>
                        <div className="order-price">
                             AED{option.price}
                        </div>
                    </div>
                    <ul className="order-details">
                        {this.generateOptions(option.options)}
                    </ul>
                </div>
            ) 
        }
    return list
}

    generateOptions(opt){
        var list = []
        for (var i in opt){
            list.push(
                <li className="order">{opt[i]}</li>
            )
        }
        return list
    }
    
    render()
    {
        return (
        <div className="order-container">
            <h3 className="order-head">My Order</h3>
            {this.generateList()}
            <ul className="order-total">
                <li className="order">
                    <div className="order-title">
                        <div className="order-name">
                            Subtotal
                        </div>
                        <div className="order-price">
                            AED{accounts.subtotal}
                        </div>
                    </div>
                </li>
                <li className="order">
                    <div className="order-title">
                        <div className="order-name">
                            Delivery Charge
                        </div>
                        <div className="order-price">
                            AED{accounts.deliveryCharge}
                        </div>
                    </div>
                </li>
                <li className="order">
                    <div className="order-title">
                        <div className="order-name">
                            Tip
                        </div>
                        <div className="order-price">
                            AED{accounts.tip}
                        </div>
                    </div>
                </li>
                <li className="order finalSummary">
                    <div className="order-title-final">
                        <div className="order-name-final">
                            Total
                        </div>
                        <div className="order-price-final">
                            AED{accounts.subtotal + accounts.tip + accounts.deliveryCharge}
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        )
    }
}

export default OrderSummary