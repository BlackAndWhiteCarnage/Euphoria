import React from 'react';
import styled from 'styled-components';
import HamburgerMenu from 'assets/icons/HamburgerMenu.svg';
import DarkHamburgerMenu from 'assets/icons/DarkHamburgerMenu.svg';

const Hamburger = ({ darkMode }) => {
  return <HamburgerImg src={darkMode ? DarkHamburgerMenu : HamburgerMenu} />;
};

const HamburgerImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  margin-bottom: 2rem;
  @media screen and (min-width: 680px) {
    display: none;
  }
`;

export default Hamburger;
