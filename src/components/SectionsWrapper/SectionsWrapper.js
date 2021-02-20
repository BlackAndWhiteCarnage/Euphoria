import React from 'react';
import styled from 'styled-components';
import DarkMode from 'assets/icons/DarkMode.svg';
import Instagram from 'assets/icons/Instagram.svg';
import Email from 'assets/icons/Email.svg';
import WhatsApp from 'assets/icons/WhatsApp.svg';
import Square from 'assets/icons/Square.svg';

const SectionsWrapper = ({ darkMode, setDarkMode }) => {
  console.log(darkMode);
  return (
    <Wrapper>
      <DarkModeButton onClick={() => setDarkMode(!darkMode)}>
        <DarkModeIcon src={DarkMode} />
      </DarkModeButton>
      <SquareIcon src={Square} />
      <SocialMediaIconsWrapper>
        <NavItemButton>
          <SocialMediaIcon src={Instagram} />
        </NavItemButton>
        <NavItemButton>
          <SocialMediaIcon src={Email} />
        </NavItemButton>
        <NavItemButton>
          <SocialMediaIcon src={WhatsApp} />
        </NavItemButton>
      </SocialMediaIconsWrapper>
      <NavWrapper>
        <NavItemButton>
          <NavItem>majteczki</NavItem>
        </NavItemButton>
        <NavItemButton>
          <NavItem>skarpetki</NavItem>
        </NavItemButton>
        <NavItemButton>
          <NavItem>rajstopy i pończoszki</NavItem>
        </NavItemButton>
        <NavItemButton>
          <NavItem>inne</NavItem>
        </NavItemButton>
      </NavWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: none;
  @media screen and (min-width: 680px) {
    display: block;
    position: relative;
    width: 80%;
    height: 80%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    pointer-events: none;
  }
`;

const DarkModeIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

const SquareIcon = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 2.5rem;
  height: 2.5rem;
`;

const SocialMediaIconsWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 15rem;
  display: flex;
  justify-content: space-between;
`;

const SocialMediaIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  pointer-events: all;
`;

const NavWrapper = styled.ul`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 50rem;
  font-family: 'Montserrat';
  font-weight: lighter;
`;

const NavItem = styled.li`
  list-style: none;
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fontSize.m};
  pointer-events: all;
`;

const NavItemButton = styled.button`
  background: none;
  border: none;
`;

const DarkModeButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  width: 2.5rem;
  height: 2.5rem;
  background: none;
  border: none;
  pointer-events: all;
`;

export default SectionsWrapper;
