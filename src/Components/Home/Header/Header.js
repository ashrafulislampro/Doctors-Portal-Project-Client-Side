import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css';
const Header = () => {
          return (
                    <main className="header_container">
                              <Navbar></Navbar>
                              <HeaderMain></HeaderMain>
                              <BusinessInfo></BusinessInfo>
                    </main>
          );
};

export default Header;