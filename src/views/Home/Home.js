import React, { useState } from 'react';
import {
  Wrapper,
  LogoIcon,
  LogoIconDesktop,
  ImageWrapper,
  ImagesWrapper,
  Image,
  Square,
  DarkModeIcon,
  List,
  ListItem,
  SocialMedia,
  Icon,
} from './Home.styles';
import Logo from 'assets/icons/Logo.svg';
import LogoDesktop from 'assets/icons/LogoDesktop.svg';
import DarkMode from 'assets/icons/DarkMode.svg';
import Email from 'assets/icons/Email.svg';
import Instagram from 'assets/icons/Instagram.svg';
import WhatsApp from 'assets/icons/WhatsApp.svg';
import Image1 from 'assets/images/Image1.jpg';
import { images } from 'data/Images';

const Home = () => {
  const [current, setCurrent] = useState(1);

  let length = images.length;

  setTimeout(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, 2000);

  return (
    <Wrapper>
      <LogoIcon src={Logo}></LogoIcon>
      <LogoIconDesktop src={LogoDesktop} />
      <ImageWrapper>
        <ImagesWrapper>
          {images.map((item, index) => (
            <Image
              className={index === current ? 'show' : 'hide'}
              src={images[current]}
            />
          ))}
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
    </Wrapper>
  );
};

export default Home;
