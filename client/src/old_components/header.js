import React from 'react'
import logo from '../img/logo2.jpg';

const Header = () => {
    return(
        <div className='header'>
            <p className='header-p'>Serving Dubai</p>
            <img src={logo} className='header-img'></img>
        {/*<h1 className='header-h1'>Just Starters</h1>*/}
            <p className='header-p'>Call us at 800-12345</p>
        </div>   
    )
}

export default Header