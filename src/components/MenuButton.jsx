import React from 'react';
import styled from 'styled-components';

import close from '../../public/close.png';
import menu from '../../public/menu.png';
import { Img } from './Img';

const MenuButtonWrapper = styled.button`
  object-fit: cover;
  all: unset;
  cursor: pointer;

  @media only screen and (min-width: 624px) {
    display: none;
  }
`;

function MenuButton({ open, handleClick }) {
  return !open ? (
    <MenuButtonWrapper onClick={handleClick}>
      <Img
        src={menu}
        alt="menu button"
        height="2rem"
        width="2rem"
        borderRadius="0.3rem"
        margin="0.5rem"
      />
    </MenuButtonWrapper>
  ) : (
    <MenuButtonWrapper onClick={handleClick}>
      <Img
        src={close}
        alt="close button"
        height="1.5rem"
        width="1.5rem"
        borderRadius="0.3rem"
        margin="0.5rem"
      />
    </MenuButtonWrapper>
  );
}

export default MenuButton;
