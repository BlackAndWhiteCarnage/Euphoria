import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 680px) {
    flex-direction: column;
  }
`;

export const LogoIcon = styled.img`
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

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageWrapper = styled.div`
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

export const ImagesWrapper = styled.div`
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

export const Square = styled.div`
  position: absolute;
  left: 46%;
  top: 48%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border: 2px solid #b80202;
  z-index: -1;
`;

export const DarkModeIcon = styled.img`
  position: absolute;
  left: -4rem;
  width: 2.5rem;
  @media screen and (min-width: 680px) {
    width: 4rem;
    left: -5rem;
  }
  @media screen and (min-width: 1200px) {
    left: -7rem;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: space-between;
  right: -6rem;
  list-style: none;
  top: 0;
  color: ${({ theme }) => theme.colors.primaryLight};
  max-width: 5rem;
  height: 100%;
  font-family: 'Montserrat', sans-serif;
  @media screen and (min-width: 680px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  @media screen and (min-width: 1200px) {
    right: -8rem;
  }
`;

export const ListItem = styled.li`
  font-size: ${({ theme }) => theme.fontSize.s};
  span {
    color: ${({ theme }) => theme.colors.primaryRed};
    font-weight: bold;
  }
  @media screen and (min-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const SocialMedia = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  left: -4rem;
  height: 40%;
  bottom: 0;
  @media screen and (min-width: 680px) {
    left: -5rem;
  }
  @media screen and (min-width: 1200px) {
    left: -7rem;
  }
`;

export const Icon = styled.img`
  width: 2.5rem;
  @media screen and (min-width: 680px) {
    width: 3rem;
  }
`;

export const LogoIconDesktop = styled.img`
  display: none;
  @media screen and (min-width: 1200px) {
    display: block;
    width: 45%;
    height: 90%;
  }
`;
