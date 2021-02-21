import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import {
  Wrapper,
  DarkModeButton,
  DarkModeIcon,
  SquareIcon,
  SocialMediaIconsWrapper,
  NavItemButton,
  SocialMediaIcon,
  Dot,
  DotInfo,
  DotsWrapper,
  NavItem,
  NavWrapper,
  ShopSquareIcon,
  CartIcon,
  CartAndDarkModeButtonWrapper,
} from './SectionsWrapper.styles';
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
import Cart from 'assets/icons/Cart.svg';

const SectionsWrapper = ({ darkMode, setDarkMode, slide, setSlide, path }) => {
  return (
    <Switch>
      <Wrapper>
        <CartAndDarkModeButtonWrapper>
          <DarkModeButton onClick={() => setDarkMode(!darkMode)}>
            <DarkModeIcon src={darkMode ? DarkDarkMode : DarkMode} />
          </DarkModeButton>
          {path && <CartIcon src={Cart} />}
        </CartAndDarkModeButtonWrapper>
        <SquareIcon src={darkMode ? DarkSquare : Square} />
        {!path && (
          <>
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
          </>
        )}
        {path && <ShopSquareIcon src={darkMode ? DarkSquare : Square} />}

        <NavWrapper>
          <Link to="/sklep">
            <NavItemButton>
              <NavItem className={darkMode && 'darkMode'}>majteczki</NavItem>
            </NavItemButton>
          </Link>
          <Link to="/sklep">
            <NavItemButton>
              <NavItem className={darkMode && 'darkMode'}>skarpetki</NavItem>
            </NavItemButton>
          </Link>
          <Link to="/sklep">
            <NavItemButton>
              <NavItem className={darkMode && 'darkMode'}>rajstopy i pończoszki</NavItem>
            </NavItemButton>
          </Link>
          <Link to="/sklep">
            <NavItemButton>
              <NavItem className={darkMode && 'darkMode'}>inne</NavItem>
            </NavItemButton>
          </Link>
        </NavWrapper>
        {/* If home page, then render */}
        {!path && (
          <DotsWrapper>
            <Dot onClick={() => setSlide(0)} className={darkMode ? `darkMode ${slide === 0 && 'active'}` : slide === 0 && 'active'}>
              <DotInfo className={darkMode && 'darkMode'}>Strona główna</DotInfo>
            </Dot>
            <Dot onClick={() => setSlide(1)} className={darkMode ? `darkMode ${slide === 1 && 'active'}` : slide === 1 && 'active'}>
              <DotInfo className={darkMode && 'darkMode'}>Dlaczego u mnie?</DotInfo>
            </Dot>
            <Dot onClick={() => setSlide(2)} className={darkMode ? `darkMode ${slide === 2 && 'active'}` : slide === 2 && 'active'}>
              <DotInfo className={darkMode && 'darkMode'}>Jak kupić?</DotInfo>
            </Dot>
            <Dot onClick={() => setSlide(3)} className={darkMode ? `darkMode ${slide === 3 && 'active'}` : slide === 3 && 'active'}>
              <DotInfo className={darkMode && 'darkMode'}>Kontakt</DotInfo>
            </Dot>
          </DotsWrapper>
        )}
      </Wrapper>
    </Switch>
  );
};

export default SectionsWrapper;
