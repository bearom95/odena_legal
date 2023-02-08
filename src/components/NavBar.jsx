import React from 'react';
import { NavLink } from 'react-router-dom';

import { NavbarWrapper } from './NavBarWrapper';

function NavBar({ open }) {
  return (
    <NavbarWrapper open={open}>
      <NavLink to="" className="navlink">
        PRINCIPAL
      </NavLink>
      <NavLink to="despacho" className="navlink">
        EL DESPACHO
      </NavLink>
      <NavLink to="nosotros" className="navlink">
        NOSOTROS
      </NavLink>
      <NavLink to="blog" className="navlink">
        BLOG
      </NavLink>
      <NavLink to="contacto" className="navlink">
        CONTACTO
      </NavLink>
    </NavbarWrapper>
  );
}

export default NavBar;
