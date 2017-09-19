import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from "react-router-dom";
import ProductOptions from '../components/options'
import Header from '../containers/detailHeader'

import {fetchProduct} from '../actions/index';

import '../style/detailPage.css'

class DetailPage extends Component {
    componentDidMount () {
        window.scrollTo(0, 0)
        var myId = this.props.match.params.id
        this.props.fetchProduct(myId)
    }
    
    constructor(props) {
        super(props)
        this.state = {
            optionsPrice: 0,
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
        this.props.history.push('/checkout/')
    }
    
    render()
    {
        if (!this.props.product){
            console.log("Still Loading")
            return (
                <div>
                    <Header></Header>
                    <div className="loading"></div>
                </div>
            )
        }
        console.log("Finished Loaded")
        console.log(this.props.product)

        return (
            <div>
                <Header></Header>
                            <div className="detailBody">
                <div className="detailLeft">
                    <div className="detailGallery">
                        <img className="detailImage" src={this.props.product.url}/>
                    </div>
                    <div className="detailText">
                        <h1 className="detailTitle">{this.props.product.title}</h1>
                        <div className="detailDescr">
                            <p className="detailSubtitle">{this.props.product.descr}</p>
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
                        configs={this.props.product.configs}
                        ></ProductOptions>
                    {/*<div className="reviewContainer"></div>*/}
                    <div className="reviewContainer">
                        <button className="buyButton" onClick={this.completeOrder}><div className="buttonTitle">ADD TO CART</div><div className="buttonSubtitle">AED {this.props.product.price + this.state.optionsPrice}</div> </button>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        product: state.product ? state.product.product : null
    }
}

export default connect(mapStateToProps, {fetchProduct})(withRouter(DetailPage))