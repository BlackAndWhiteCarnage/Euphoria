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

const SectionsWrapper = ({ darkMode, setDarkMode, slide, setSlide }) => {
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
      <DotsWrapper>
        <Dot
          onClick={() => setSlide(0)}
          className={
            darkMode
              ? `darkMode ${slide === 0 && 'active'}`
              : slide === 0 && 'active'
          }
        />
        <Dot
          onClick={() => setSlide(1)}
          className={
            darkMode
              ? `darkMode ${slide === 1 && 'active'}`
              : slide === 1 && 'active'
          }
        />
        <Dot
          onClick={() => setSlide(2)}
          className={
            darkMode
              ? `darkMode ${slide === 2 && 'active'}`
              : slide === 2 && 'active'
          }
        />
        <Dot
          onClick={() => setSlide(3)}
          className={
            darkMode
              ? `darkMode ${slide === 3 && 'active'}`
              : slide === 3 && 'active'
          }
        />
      </DotsWrapper>
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
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.3);
    transition: 0.3s ease;
  }
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
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.3);
    transition: 0.3s ease;
  }
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
  transition: 1.5s ease;
  cursor: pointer;
  &.darkMode {
    transition: 1.5s ease;
    color: ${({ theme }) => theme.colors.primaryDark};
  }
  &:hover {
    transition: 0.5s ease;
    letter-spacing: 0.1rem;
    color: ${({ theme }) => theme.colors.primaryRed};
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
  background: none;
  border: none;
  pointer-events: all;
`;

const DotsWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  width: auto;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  pointer-events: all;
  ${navigator.userAgent.toLowerCase().indexOf('firefox') > -1 &&
  'display: none'}
`;

const Dot = styled.button`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: 0.5s ease;
  &.darkMode {
    background: #2d2d2d;
  }
  &.active {
    transition: 0.5s ease;
    transform: scale(1.5);
    background: #b80202;
  }
  &:hover {
    transition: 0.5s ease;
    transform: scale(1.3);
  }
`;

export default SectionsWrapper;
