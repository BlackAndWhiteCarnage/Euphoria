import React from 'react';
import styled from 'styled-components';
import Logo from 'assets/icons/Logo.svg';
import LogoDesktop from 'assets/icons/LogoDesktop.svg';
import Hamburger from 'assets/icons/Hamburger.svg';
import DarkMode from 'assets/icons/DarkMode.svg';
import Email from 'assets/icons/Email.svg';
import Instagram from 'assets/icons/Instagram.svg';
import WhatsApp from 'assets/icons/WhatsApp.svg';
import Image1 from 'assets/images/Image1.jpg';

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 680px) {
    flex-direction: column;
  }
`;

const LogoIcon = styled.img`
  @media screen and (max-width: 680px) {
    height: 40%;
  }
  @media screen and (min-width: 680px) {
    width: 70%;
  }
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 60%;
  width: 100%;
  margin-top: 2rem;
  @media screen and (min-width: 680px) {
    margin-top: 0;
    width: 80%;
    height: 60%;
  }
  @media screen and (min-width: 1200px) {
    width: 40%;
    height: 60%;
  }
  @media screen and (min-width: 1500px) {
    width: 40%;
    height: 80%;
  }
`;

const ImagesWrapper = styled.div`
  position: relative;
  width: 45%;
  height: 80%;
  z-index: 10;
  @media screen and (min-width: 680px) {
    margin-top: 0;
    width: 60%;
    height: 100%;
  }
`;

const Square = styled.div`
  position: absolute;
  left: 46%;
  top: 48%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border: 2px solid #b80202;
  z-index: -1;
`;

const HamburgerIcon = styled.img`
  position: fixed;
  bottom: 3%;
  @media screen and (min-width: 680px) {
    left: 50%;
    transform: translate(-50%);
  }
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

const DarkModeIcon = styled.img`
  position: absolute;
  left: -3.5rem;
  width: 2.5rem;
  @media screen and (min-width: 680px) {
    left: -5rem;
    width: 3.5rem;
  }
  @media screen and (min-width: 1200px) {
    left: -7rem;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: space-between;
  right: -6rem;
  list-style: none;
  top: 0;
  color: #e7e7e7;
  max-width: 5rem;
  height: 100%;
  @media screen and (min-width: 680px) {
    font-size: 1.6rem;
  }
  @media screen and (min-width: 1200px) {
    right: -8rem;
  }
`;

const ListItem = styled.li`
  span {
    color: #b80202;
    font-weight: bold;
  }
`;

const SocialMedia = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  left: -3.5rem;
  height: 40%;
  bottom: 0;
  @media screen and (min-width: 680px) {
    left: -5rem;
  }
  @media screen and (min-width: 1200px) {
    left: -7rem;
  }
`;

const Icon = styled.img`
  width: 2rem;
  @media screen and (min-width: 680px) {
    width: 3rem;
  }
`;

const LogoIconDesktop = styled.img`
  display: none;
  @media screen and (min-width: 1200px) {
    display: block;
    width: 45%;
    height: 90%;
  }
`;

const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 10%;
  height: 60%;
  list-style: none;
  color: #e7e7e7;
  font-size: 2.4rem;
  margin-left: 3rem;
  @media screen and (max-width: 1200px) {
    display: none;
  }
  @media screen and (min-width: 1500px) {
    height: 80%;
    margin-left: 5rem;
  }
`;

const NavItem = styled.li``;

const Home = () => {
  return (
    <Wrapper>
      <LogoIcon src={Logo}></LogoIcon>
      <LogoIconDesktop src={LogoDesktop} />
      <ImageWrapper>
        <ImagesWrapper>
          <Image src={Image1} />
          <Square />
          <DarkModeIcon src={DarkMode} />
          <List>
            <ListItem>
              <span>Wzrost:</span> 164cm
            </ListItem>
            <ListItem>
              <span>Waga:</span> 54kg
            </ListItem>
            <ListItem>
              <span>Kolor oczu:</span> Zielony
            </ListItem>
            <ListItem>
              <span>Kolor włosów:</span> Blond
            </ListItem>
            <ListItem>
              <span>Rozmiar stópki:</span> 37
            </ListItem>
            <ListItem>
              <span>Miseczka:</span> C
            </ListItem>
          </List>
          <SocialMedia>
            <Icon src={Email} />
            <Icon src={Instagram} />
            <Icon src={WhatsApp} />
          </SocialMedia>
        </ImagesWrapper>
      </ImageWrapper>
      <HamburgerIcon src={Hamburger} />
      <Nav>
        <NavItem>Oferta</NavItem>
        <NavItem>Majteczki</NavItem>
        <NavItem>Skarpetki</NavItem>
        <NavItem>Zestawy</NavItem>
        <NavItem>Rajstopy i Pończochy</NavItem>
        <NavItem>Inne</NavItem>
      </Nav>
    </Wrapper>
  );
};

export default Home;
