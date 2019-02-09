import React      from 'react';
import './Header.css';
import Navigation from '../Navigation';


const Header = () => (
  <header>
    <img src={`${'../'.repeat(window.location.href.split('/').length-4)}images/logo.png`}
         alt="logo" className={'header-logo'}/>
    <Navigation/>
  </header>
);

export default Header;
