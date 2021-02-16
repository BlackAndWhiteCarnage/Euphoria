import React from 'react';
import styled from 'styled-components';
import Hamburgers from 'assets/icons/Hamburger.svg';

const Hamburger = () => {
  return (
    <HamburgerWrapper>
      <HamburgerIcon src={Hamburgers} />
    </HamburgerWrapper>
  );
};

const HamburgerIcon = styled.img`
  width: 4rem;
`;
const HamburgerWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 4rem;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  @media screen and (max-height: 570px) {
    width: 5rem;
    border-radius: 10px 0 0 0;
  }
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export default Hamburger;
