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

const HamburgerIcon = styled.img``;
const HamburgerWrapper = styled.div`
  -webkit-box-shadow: inset 0px 10px 10px 5px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0px 10px 10px 5px rgba(0, 0, 0, 0.2);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  left: 50%;
  width: 8rem;
  height: 7rem;
  background: #252525;
  border-radius: 50px 50px 0 0;
  transform: translate(-50%);
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export default Hamburger;
