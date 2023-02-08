import { useState } from 'react';

import { HeaderWrapper } from './HeaderWrapper';
import MenuButton from './MenuButton';
import NavBar from './NavBar';

export const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <HeaderWrapper>
      <img src="" alt="logo" />
      <NavBar open={open} />
      <MenuButton open={open} handleClick={handleClick} />
    </HeaderWrapper>
  );
};
