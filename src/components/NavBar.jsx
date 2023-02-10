import React from 'react';
import { NavLink } from 'react-router-dom';

import { NavbarWrapper } from './NavBarWrapper';

function NavBar({ open, handleClick }) {
  return (
    <NavbarWrapper open={open}>
      <NavLink to="" className="navlink" open={open} onClick={handleClick}>
        PRINCIPAL
      </NavLink>
      <NavLink to="despacho" className="navlink" onClick={handleClick}>
        EL DESPACHO
      </NavLink>
      <NavLink to="nosotros" className="navlink" onClick={handleClick}>
        NOSOTROS
      </NavLink>
      <NavLink to="blog" className="navlink" onClick={handleClick}>
        BLOG
      </NavLink>
      <NavLink to="contacto" className="navlink" onClick={handleClick}>
        CONTACTO
      </NavLink>
    </NavbarWrapper>
  );
}

export default NavBar;
