import React from 'react';
import './Header.css';
import ImgLogo from './logo-belleza.jpg';

// creamos props con destructuring ({}) 
const Header = ({ title, subtitle }) => {
    return (
        <div className='Header'>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <img src={ImgLogo} alt="logo"></img>
        </div>
    )
}

export default Header;

