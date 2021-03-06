import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Button = ({ text, className, onClick, cart, itemID }) => {
  const checkIDHandler = () => {
    if (cart !== undefined && cart !== false) {
      if (cart.find((item) => item.id === itemID)) {
        return 'added';
      }
    }
  };

  return (
    <StyledButton className={`${className} ${checkIDHandler()}`} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: block;
  position: relative;
  width: 100%;
  min-height: 5rem;
  border: 1px solid #e7e7e7;
  background: none;
  font-family: 'Montserrat';
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fontSize.m};
  border-radius: 10rem;
  cursor: pointer;
  transition: 0.5s ease;
  overflow: hidden;
  z-index: 3;
  &::after {
    content: '';
    position: absolute;
    top: -100%;
    left: 50%;
    transform: translate(-50%, 0);
    transition: 0.5s ease;
  }
  &.added {
    &::after {
      position: absolute;
      background: #ff9900;
      left: 50%;
      top: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: translate(-50%, -50%);
      font-weight: bold;
      content: 'dodano!';
      z-index: 800;
      width: 100%;
      height: 100%;
      transition: 0.5s ease;
    }
  }
  margin: ${(props) => props.style && '0.5rem'};
  &.toggle {
    display: none;
  }
  ::before {
    content: '';
    position: absolute;
    left: -100%;
    bottom: 0;
    background: ${({ theme }) => theme.colors.primaryRed};
    width: 100%;
    height: 100%;
    transition: 0.5s ease;
    z-index: -1;
  }
  @media screen and (max-width: 680px) {
    min-height: 4rem;
  }
  &.darkMode {
    color: ${({ theme }) => theme.colors.primaryDark};
    border: 1px solid #2d2d2d;
    transition: 1.5s ease;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
    transition: 0.5s ease;
    ::before {
      left: 0;
      bottom: 0;
      transition: 0.5s ease;
      z-index: -1;
    }
  }
`;

export default Button;
