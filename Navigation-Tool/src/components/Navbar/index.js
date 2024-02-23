import React from 'react';
import { Nav, NavLink, Bars, NavMenu } from './NavbarElements';
import logoImage from '../../image/logo.png';

const Navbar = () => {
  return (
    <>
      {/* Navigation bar */}
      <Nav style={{ paddingLeft: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Logo */}
          <img
            src={logoImage}
            alt="Logo"
            style={{
              height: '100px', 
              width: 'auto', 
              marginRight: '10px', 
            }}
          />
          {/* Logo text */}
          <span style={{ color: 'white', fontSize: '2em' }}>City Navigation and Emergency Route Planning Tool</span>
        </div>
        <Bars />

        {/* Navigation links */}
        <NavMenu>
          
          <NavLink to="/maps">Maps</NavLink>
          <NavLink to="/blockers">Block Routes</NavLink>
        
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
