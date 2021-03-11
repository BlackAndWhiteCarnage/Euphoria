import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ListItem, StyledLink, DarkModeImg, List, Modal, HomeImg, CartImg, CartLink, HamburgerImg } from './Hamburger.styles';
import HamburgerMenu from 'assets/icons/HamburgerMenu.svg';
import DarkHamburgerMenu from 'assets/icons/DarkHamburgerMenu.svg';
import Cart from 'assets/icons/Cart.svg';
import DarkCart from 'assets/icons/DarkCart.svg';
import Home from 'assets/icons/Home.svg';
import DarkMode from 'assets/icons/DarkMode.svg';
import DarkDarkMode from 'assets/icons/DarkDarkMode.svg';

const Hamburger = ({ darkMode, path, setDarkMode, cart }) => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <HamburgerImg src={darkMode ? DarkHamburgerMenu : HamburgerMenu} onClick={toggleHandler} className={darkMode && 'darkMode'} />
      <CartLink to="/koszyk" className={cart.length > 0 && `${darkMode && 'showDark'} ${!darkMode && 'show'}`}>
        <p>{cart.length > 0 && cart.length}</p>
        <CartImg
          src={darkMode ? DarkCart : Cart}
          className={`${darkMode && 'darkMode'} ${cart.length > 0 && 'hideBackground'}`}
          onClick={() => setToggle(false)}
        />
      </CartLink>
      <Link to="/">
        <HomeImg src={Home} className={darkMode && 'darkMode'} onClick={() => setToggle(false)} />
      </Link>
      <Modal className={toggle && `showModal ${darkMode && 'darkMode'}`}>
        <List>
          <StyledLink to="/sklep/majteczki">
            <ListItem className={darkMode && 'darkMode'} onClick={toggleHandler}>
              majteczki
            </ListItem>
          </StyledLink>
          <StyledLink to="/sklep/skarpetki">
            <ListItem className={darkMode && 'darkMode'} onClick={toggleHandler}>
              skarpetki
            </ListItem>
          </StyledLink>
          <StyledLink to="/sklep/rajstopy">
            <ListItem className={darkMode && 'darkMode'} onClick={toggleHandler}>
              rajstopy i pończochy
            </ListItem>
          </StyledLink>
          <StyledLink to="/sklep/inne">
            <ListItem className={darkMode && 'darkMode'} onClick={toggleHandler}>
              inne
            </ListItem>
          </StyledLink>
        </List>
        {path && <DarkModeImg src={darkMode ? DarkDarkMode : DarkMode} onClick={() => setDarkMode(!darkMode)} />}
      </Modal>
    </>
  );
};

export default Hamburger;
