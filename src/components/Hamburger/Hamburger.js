import React from 'react';
import styled from 'styled-components';
import Hamburgers from 'assets/icons/Hamburger.svg';

const Hamburger = () => {
  return <HamburgerIcon src={Hamburgers} />;
};

const HamburgerIcon = styled.img`
  position: fixed;
  bottom: 3%;
  left: 50%;
  transform: translate(-50%);
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export default Hamburger;
