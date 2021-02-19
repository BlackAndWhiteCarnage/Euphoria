import React, { useState } from 'react';
import DarkMode from 'assets/icons/DarkMode.svg';
import Email from 'assets/icons/Email.svg';
import Instagram from 'assets/icons/Instagram.svg';
import WhatsApp from 'assets/icons/WhatsApp.svg';
import LogoForMobile from 'assets/icons/LogoForMobile.svg';
import HomeImg1 from 'assets/images/HomeImg1.jpg';
import HomeImg2 from 'assets/images/HomeImg2.jpg';
import HomeImg3 from 'assets/images/HomeImg3.jpg';
import {
  Wrapper,
  ImageWrapper,
  Image,
  Logo,
  AllIconsWrapper,
  IconsWrapper,
  Icon,
  DarkModeIcon,
} from './Home.styles';

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
      <ImageWrapper>
        {images.map((item, index) => (
          <Image
            className={index === current ? 'show' : 'hide'}
            src={imageToRender}
          />
        ))}
        <Logo src={LogoForMobile} />
      </ImageWrapper>
      <AllIconsWrapper>
        <DarkModeIcon src={DarkMode} />
        <IconsWrapper>
          <Icon src={Instagram} />
          <Icon src={WhatsApp} />
          <Icon src={Email} />
        </IconsWrapper>
      </AllIconsWrapper>
    </Wrapper>
  );
};

export default Home;
