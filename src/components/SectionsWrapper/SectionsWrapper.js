import React from 'react';
import styled from 'styled-components';
import DarkMode from 'assets/icons/DarkMode.svg';
import DarkDarkMode from 'assets/icons/DarkDarkMode.svg';
import Instagram from 'assets/icons/Instagram.svg';
import DarkInstagram from 'assets/icons/DarkInstagram.svg';
import Email from 'assets/icons/Email.svg';
import DarkEmail from 'assets/icons/DarkEmail.svg';
import WhatsApp from 'assets/icons/WhatsApp.svg';
import DarkWhatsApp from 'assets/icons/DarkWhatsApp.svg';
import Square from 'assets/icons/Square.svg';
import DarkSquare from 'assets/icons/DarkSquare.svg';

const SectionsWrapper = ({ darkMode, setDarkMode }) => {
  return (
    <Wrapper>
      <DarkModeButton onClick={() => setDarkMode(!darkMode)}>
        <DarkModeIcon src={darkMode ? DarkDarkMode : DarkMode} />
      </DarkModeButton>
      <SquareIcon src={darkMode ? DarkSquare : Square} />
      <SocialMediaIconsWrapper>
        <NavItemButton>
          <SocialMediaIcon src={darkMode ? DarkInstagram : Instagram} />
        </NavItemButton>
        <NavItemButton>
          <SocialMediaIcon src={darkMode ? DarkEmail : Email} />
        </NavItemButton>
        <NavItemButton>
          <SocialMediaIcon src={darkMode ? DarkWhatsApp : WhatsApp} />
        </NavItemButton>
      </SocialMediaIconsWrapper>
      <NavWrapper>
        <NavItemButton>
          <NavItem className={darkMode && 'darkMode'}>majteczki</NavItem>
        </NavItemButton>
        <NavItemButton>
          <NavItem className={darkMode && 'darkMode'}>skarpetki</NavItem>
        </NavItemButton>
        <NavItemButton>
          <NavItem className={darkMode && 'darkMode'}>
            rajstopy i pończoszki
          </NavItem>
        </NavItemButton>
        <NavItemButton>
          <NavItem className={darkMode && 'darkMode'}>inne</NavItem>
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
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.primaryLight};
  pointer-events: all;
  &.darkMode {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
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
