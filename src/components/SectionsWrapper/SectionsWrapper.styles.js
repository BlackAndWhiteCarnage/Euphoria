import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.nav`
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
    z-index: 1;
    pointer-events: none;
  }
`;

export const CartAndDarkModeButtonWrapper = styled.div`
  width: 5rem;
  position: absolute;
  display: flex;
  right: 0;
  top: 0;
  background: none;
  border: none;
  pointer-events: all;
  @media screen and (min-width: 860px) {
    width: 14rem;
    justify-content: space-between;
    &.path {
      width: 10rem;
    }
  }
`;

export const DarkModeIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.3);
    transition: 0.3s ease;
  }
`;

export const CartIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.3);
    transition: 0.3s ease;
  }
`;
export const StyledLink = styled(Link)`
  width: 6rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  &.show {
    background: rgba(0, 0, 0, 0.8);
    color: ${({ theme }) => theme.colors.primaryLight};
  }
  &.showDark {
    background: rgba(255, 255, 255, 0.8);
    color: ${({ theme }) => theme.colors.primaryDark};
  }
  p {
    font-family: 'Montserrat';
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const BackIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.3);
    transition: 0.3s ease;
  }
`;

export const SquareIcon = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 2.5rem;
  height: 2.5rem;
`;

export const ShopSquareIcon = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 2.5rem;
  height: 2.5rem;
  transform: rotate(90deg);
`;

export const SocialMediaIconsWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 15rem;
  display: flex;
  justify-content: space-between;
`;

export const SocialMediaIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  pointer-events: all;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.3);
    transition: 0.3s ease;
  }
`;

export const NavWrapper = styled.ul`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 50rem;
  font-family: 'Montserrat';
  font-weight: lighter;
`;

export const NavItem = styled.li`
  list-style: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.primaryLight};
  pointer-events: all;
  transition: 1.5s ease;
  cursor: pointer;
  &.darkMode {
    transition: 1.5s ease;
    color: ${({ theme }) => theme.colors.primaryDark};
  }
  &.active {
    color: ${({ theme }) => theme.colors.primaryRed};
    letter-spacing: 0.1rem;
    border-bottom: 1px solid #b80202;
  }
  &:hover {
    transition: 0.5s ease;
    letter-spacing: 0.1rem;
    color: ${({ theme }) => theme.colors.primaryRed};
  }
`;

export const NavItemButton = styled.button`
  background: none;
  border: none;
`;

export const DarkModeButton = styled.button`
  background: none;
  border: none;
  pointer-events: all;
`;

export const DotsWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  width: auto;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  pointer-events: all;
  ${navigator.userAgent.toLowerCase().indexOf('firefox') > -1 && 'display: none'}
`;

export const Dot = styled.button`
  position: relative;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: 0.5s ease;
  &.darkMode {
    background: #2d2d2d;
  }
  &.active {
    transition: 0.5s ease;
    transform: scale(1.3);
    background: #b80202;
  }
  &:hover {
    transition: 0.5s ease;
    transform: scale(1.3);
  }
`;

export const DotInfo = styled.p`
  display: none;
  @media screen and (min-width: 1200px) {
    display: block;
    position: absolute;
    text-align: right;
    white-space: nowrap;
    left: -10rem;
    top: 50%;
    transform: translate(0, -50%);
    padding: 1rem;
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.colors.primaryLight};
    &.darkMode {
      color: ${({ theme }) => theme.colors.primaryDark};
    }
  }
`;
