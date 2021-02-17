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
  ImgWrapper,
} from './Home.styles';
import Logo from 'assets/icons/Logo.svg';
import LogoDesktop from 'assets/icons/LogoDesktop.svg';
import DarkMode from 'assets/icons/DarkMode.svg';
import Email from 'assets/icons/Email.svg';
import Instagram from 'assets/icons/Instagram.svg';
import WhatsApp from 'assets/icons/WhatsApp.svg';
import TikTok from 'assets/icons/TikTok.svg';
import HomeImg1 from 'assets/images/HomeImg1.jpg';
import HomeImg2 from 'assets/images/HomeImg2.jpg';
import HomeImg3 from 'assets/images/HomeImg3.jpg';

const images = [HomeImg1, HomeImg2, HomeImg3];

const Home = () => {
  const [current, setCurrent] = useState(0);

  let length = images.length;

  let imageToRender = images[current];

  setTimeout(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, 4000);

  return (
    <Wrapper>
      <LogoIcon src={Logo}></LogoIcon>
      <LogoIconDesktop src={LogoDesktop} />
      <ImageWrapper>
        <ImagesWrapper>
          <ImgWrapper>
            {images.map((item, index) => (
              <Image
                className={index === current ? 'show' : 'hide'}
                src={imageToRender}
              />
            ))}
          </ImgWrapper>
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
            <Icon src={TikTok} />
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
