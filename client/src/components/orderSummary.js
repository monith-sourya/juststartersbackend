import React, {Component} from 'react'
import {connect} from 'react-redux'

import '../style/orderSummary.css'

class OrderSummary extends Component {
     constructor(props) {
        super(props)
        this.generateList = this.generateList.bind(this)
        this.generateOptions = this.generateOptions.bind(this)
        this.state = {
            subtotal: 0,
            deliveryCharge: 10
        }
    }
    
    generateList(){
        return this.props.cart.map((option) => {
                this.state.subtotal += option.price
                return (
                    <div className="order-item-div">
                        <div className="order-title">
                            <div className="order-name">
                                {option.title}
                            </div>
                            <ul className="order-details">
                 {this.generateOptions(option.options)}
                            </ul>
                        </div>
                        <div className="order-price">
                            AED {option.price}
                            <a className="remove-cart">×</a>
                        </div>
                    </div>
                )
        })
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
            <div className="order-item-div lastSummary">
                <div className="order-title">
                    <div className="order-name">
                        Subtotal
                    </div>
                </div>
                <div className="order-price">
                    AED {this.state.subtotal}
                </div>
            </div>
            <div className="order-item-div">
                <div className="order-title">
                    <div className="order-name">
                        Delivery Charge
                    </div>
                </div>
                <div className="order-price">
                    AED {this.state.deliveryCharge}
                </div>
            </div>
            <div className="order-item-div finalSummary">
                <div className="order-title-final">
                    <div className="order-name-final">
                        Total
                    </div>
                </div>
                <div className="order-price-final">
                    AED {this.state.subtotal + this.state.deliveryCharge}
                </div>
            </div>
        </div>
        )
    }
}

export default OrderSummary