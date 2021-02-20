import React, { useState } from 'react';
import DarkMode from 'assets/icons/DarkMode.svg';
import DarkDarkMode from 'assets/icons/DarkDarkMode.svg';
import Email from 'assets/icons/Email.svg';
import DarkEmail from 'assets/icons/DarkEmail.svg';
import Instagram from 'assets/icons/Instagram.svg';
import DarkInstagram from 'assets/icons/DarkInstagram.svg';
import WhatsApp from 'assets/icons/WhatsApp.svg';
import DarkWhatsApp from 'assets/icons/DarkWhatsApp.svg';
import LogoForMobile from 'assets/icons/LogoForMobile.svg';
import DarkLogoForMobile from 'assets/icons/DarkLogoForMobile.svg';
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
  ButtonWrapper,
} from './Home.styles';

const images = [HomeImg1, HomeImg2, HomeImg3];

const Home = ({ darkMode, setDarkMode }) => {
  const [current, setCurrent] = useState(0);

  let length = images.length;

  let imageToRender = images[current];

  setTimeout(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, 4000);

  return (
    <Wrapper>
      <ButtonWrapper>
        <ImageWrapper className={darkMode && 'darkMode'}>
          {images.map((item, index) => (
            <Image
              className={index === current ? 'show' : 'hide'}
              src={imageToRender}
            />
          ))}
          <Logo src={darkMode ? DarkLogoForMobile : LogoForMobile} />
        </ImageWrapper>
        <AllIconsWrapper>
          <DarkModeIcon
            src={darkMode ? DarkDarkMode : DarkMode}
            onClick={() => setDarkMode(!darkMode)}
          />
          <IconsWrapper>
            <Icon src={darkMode ? DarkInstagram : Instagram} />
            <Icon src={darkMode ? DarkWhatsApp : WhatsApp} />
            <Icon src={darkMode ? DarkEmail : Email} />
          </IconsWrapper>
        </AllIconsWrapper>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Home;
