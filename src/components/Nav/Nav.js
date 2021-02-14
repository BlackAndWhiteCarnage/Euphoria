import React from 'react';
import { Wrapper, NavItem } from './Nav.styles';

const Nav = () => {
  return (
    <Wrapper>
      <NavItem>Oferta</NavItem>
      <NavItem>Majteczki</NavItem>
      <NavItem>Skarpetki</NavItem>
      <NavItem>Zestawy</NavItem>
      <NavItem>Inne</NavItem>
    </Wrapper>
  );
};

export default Nav;
