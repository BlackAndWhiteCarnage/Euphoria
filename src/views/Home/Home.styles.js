import styled from 'styled-components';

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
  height: 100%;
  &.show {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    transition: 1s ease-in-out;
    opacity: 1;
    transform: scale(1.2) translate(-10%, 0);
  }
  &.hide {
    left: 0;
    top: 0;
    opacity: 0;
  }
`;

export const ImgWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const ImageWrapper = styled.div`
  position: relative;
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
  top: 0;
  left: -4rem;
  width: 2.5rem;
  cursor: pointer;
  @media screen and (min-width: 680px) {
    width: 4rem;
    left: -5rem;
  }
  @media screen and (min-width: 1200px) {
    left: -7rem;
    transition: 0.5s ease;
    &:hover {
      transform: scale(1.2);
      transition: 0.5s ease;
    }
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
  cursor: pointer;
  @media screen and (min-width: 680px) {
    width: 3rem;
    transition: 0.5s ease;
    &:hover {
      transform: scale(1.3);
      transition: 0.5s ease;
    }
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
