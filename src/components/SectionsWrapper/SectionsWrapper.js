import React from 'react';
import styled from 'styled-components';
import DarkMode from 'assets/icons/DarkMode.svg';
import Instagram from 'assets/icons/Instagram.svg';
import Email from 'assets/icons/Email.svg';
import WhatsApp from 'assets/icons/WhatsApp.svg';
import Square from 'assets/icons/Square.svg';

const SectionsWrapper = () => {
  return (
    <Wrapper>
      <DarkModeIcon src={DarkMode} />
      <SquareIcon src={Square} />
      <SocialMediaIconsWrapper>
        <SocialMediaIcon src={Instagram} />
        <SocialMediaIcon src={Email} />
        <SocialMediaIcon src={WhatsApp} />
      </SocialMediaIconsWrapper>
      <NavWrapper>
        <NavItem>majteczki</NavItem>
        <NavItem>skarpetki</NavItem>
        <NavItem>rajstopy i pończoszki</NavItem>
        <NavItem>inne</NavItem>
      </NavWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
  }
`;

const DarkModeIcon = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  width: 2.5rem;
  height: 2.5rem;
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
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export default SectionsWrapper;
