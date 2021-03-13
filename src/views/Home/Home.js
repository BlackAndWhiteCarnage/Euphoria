import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
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
import { Wrapper, ImageWrapper, Image, Logo, AllIconsWrapper, IconsWrapper, Icon, DarkModeIcon } from './Home.styles';
import { pageAnimation } from 'components/Animations/Animations';

const images = [HomeImg1, HomeImg2, HomeImg3];

const Home = ({ darkMode, setDarkMode, setSlide }) => {
  const [element, view] = useInView({ threshold: 1 });
  const [current, setCurrent] = useState(0);

  let length = images.length;

  let imageToRender = images[current];

  useEffect(() => {
    if (view) {
      setSlide(0);
    }
  }, [view]);

  setTimeout(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, 4000);

  return (
    <Wrapper ref={element} exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <ImageWrapper className={darkMode && 'darkMode'}>
        {images.map((item, index) => (
          <Image className={index === current ? 'show' : 'hide'} src={imageToRender} />
        ))}
        <Logo src={darkMode ? DarkLogoForMobile : LogoForMobile} alt="Euphoria Logo Image" />
      </ImageWrapper>
      <AllIconsWrapper>
        <DarkModeIcon src={darkMode ? DarkDarkMode : DarkMode} onClick={() => setDarkMode(!darkMode)} alt="Dark Mode Icon" />
        <IconsWrapper>
          <Icon src={darkMode ? DarkInstagram : Instagram} alt="Instagram Icon" />
          <Icon src={darkMode ? DarkWhatsApp : WhatsApp} alt="What's App Icon" />
          <Icon src={darkMode ? DarkEmail : Email} alt="Email Icon" />
        </IconsWrapper>
      </AllIconsWrapper>
    </Wrapper>
  );
};

export default Home;
