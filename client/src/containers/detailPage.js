import React, {Component} from 'react'
import {connect} from 'react-redux'

import ProductOptions from '../components/options'
import Header from '../containers/detailHeader'

import '../style/detailPage.css'

class DetailPage extends Component {
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
                        <h1 className="detailTitle">Portobello Mushroom Burger</h1>
                        <div className="detailDescr">
                            <p className="detailSubtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <ul className="detailList">
                                <li>Non Vegetarian</li>
                                <li>Spicy</li>
                                <li>Gluten Free</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="detailRight">
                    <ProductOptions></ProductOptions>
                    {/*<div className="reviewContainer"></div>*/}
                    <div className="reviewContainer">
                        <button className="buyButton"><div className="buttonTitle">Yalla, bring it home</div><div className="buttonSubtitle">AED 56</div> </button>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default DetailPage