import React, { useState } from 'react';
import DarkMode from 'assets/icons/DarkMode.svg';
import Email from 'assets/icons/Email.svg';
import Instagram from 'assets/icons/Instagram.svg';
import WhatsApp from 'assets/icons/WhatsApp.svg';
import LogoForMobile from 'assets/icons/LogoForMobile.svg';
import HomeImg1 from 'assets/images/HomeImg1.jpg';
import HomeImg2 from 'assets/images/HomeImg2.jpg';
import HomeImg3 from 'assets/images/HomeImg3.jpg';
import styled from 'styled-components';

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

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media screen and (min-width: 680px) {
    justify-content: center;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 50%;
  height: 50%;
  margin-top: 5rem;
  &::before {
    top: -1rem;
    left: -1rem;
    z-index: -1;
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    border: 1px solid #e7e7e7;
  }
  @media screen and (min-width: 680px) {
    margin-top: 0;
    width: 25rem;
  }
  @media screen and (min-width: 1200px) {
    width: 30rem;
  }
`;

const Logo = styled.img`
  position: absolute;
  left: 50%;
  height: 20%;
  bottom: -5rem;
  transform: translate(-50%);
  z-index: 2;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  &.show {
    display: block;
    object-fit: cover;
  }
  &.hide {
    display: none;
  }
`;

const AllIconsWrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 680px) {
    display: none;
  }
`;

const DarkModeIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin-top: 5rem;
  flex-basis: 25%;
`;

const IconsWrapper = styled.div`
  height: 25%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20%;
`;

const Icon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

export default Home;
