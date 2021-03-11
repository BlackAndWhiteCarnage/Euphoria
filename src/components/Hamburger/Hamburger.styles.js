import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HamburgerImg = styled.img`
  width: 4rem;
  height: 4rem;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  margin-bottom: 2rem;
  padding: 0.5rem;
  z-index: 10;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.8);
  &.darkMode {
    background: rgba(255, 255, 255, 0.8);
  }
  @media screen and (min-width: 680px) {
    display: none;
  }
`;

export const HomeImg = styled.img`
  width: 4rem;
  height: 4rem;
  position: fixed;
  padding: 0.5rem;
  bottom: 0;
  right: 20%;
  margin-bottom: 2rem;
  z-index: 10;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 50%;
  &.darkMode {
    background: rgba(255, 255, 255, 0.8);
  }
  @media screen and (min-width: 680px) {
    display: none;
  }
`;

export const CartImg = styled.img`
  width: 4rem;
  height: 4rem;
  padding: 0.5rem;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.8);
  &.darkMode {
    background: rgba(255, 255, 255, 0.8);
  }
  &.hideBackground {
    background: none;
  }
`;

export const Modal = styled.div`
  position: fixed;
  bottom: -100vh;
  height: 35rem;
  width: 100%;
  transition: 1s ease;
  z-index: 5;
  display: flex;
  justify-content: center;
  &.showModal {
    bottom: 0;
    width: 100%;
    height: 35rem;
    z-index: 5;
    transition: 0.5s ease;
    background: rgba(0, 0, 0, 0.8);
    &.darkMode {
      background: rgba(255, 255, 255, 0.8);
    }
  }
  @media screen and (min-width: 680px) {
    display: none;
  }
`;

export const List = styled.ul`
  width: 50%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  font-family: 'Montserrat';
  font-weight: bold;
  line-height: normal;
  @media screen and (min-width: 680px) {
    display: none;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fontSize.l};
  &.darkMode {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const DarkModeImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  top: 2rem;
  right: 1rem;
  z-index: 10;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const CartLink = styled(Link)`
  text-decoration: none;
  width: 4rem;
  height: 4rem;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: 0;
  left: 20%;
  margin-bottom: 2rem;
  z-index: 10;
  border-radius: 3rem;
  padding: 0.5rem;
  &.show {
    width: 6rem;
    background: rgba(0, 0, 0, 0.8);
    left: 15%;
    color: ${({ theme }) => theme.colors.primaryLight};
  }
  &.showDark {
    width: 6rem;
    background: rgba(255, 255, 255, 0.8);
    left: 15%;
    color: ${({ theme }) => theme.colors.primaryDark};
  }
  p {
    font-family: 'Montserrat';
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  @media screen and (min-width: 680px) {
    display: none;
  }
`;
