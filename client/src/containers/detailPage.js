import React, {Component} from 'react'
import {connect} from 'react-redux'

import '../style/detailPage.css'

class DetailPage extends Component {
    render()
    {
        return (
            <div className="detailBody">
                <div className="detailLeft">
                    <div className="detailGallery">
                        <img className="detailImage" src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"/>
                    </div>
                    <div className="detailText">
                        <h1 className="cardTitle">Portobello Mushroom Burger</h1>
                        <p className="cardSubtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </div>
                <div className="detailRight">
                    <div className="configContainer"></div>
                    <div className="reviewContainer"></div>
                    <button className="buyButton">Buy Now</button>
                </div>
            </div>
        )
    }
}

export default DetailPage