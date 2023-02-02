import { NavLink } from 'react-router-dom';

import { StyledDiv } from './StyledDiv';

export const Header = () => {
  return (
    <StyledDiv
      width="100%"
      backgr="silver"
      display="flex"
      flexdir="row"
      padding="1rem"
      justify="space-around"
    >
      <img src="" alt="logo" />
      <StyledDiv display="flex" gap="1.5rem" flexwrap="wrap">
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
      </StyledDiv>
    </StyledDiv>
  );
};
