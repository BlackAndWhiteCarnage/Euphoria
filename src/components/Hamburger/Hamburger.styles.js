import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HamburgerImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  margin-bottom: 2rem;
  z-index: 10;
  @media screen and (min-width: 680px) {
    display: none;
  }
`;

export const BackImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  bottom: 0;
  right: 20%;
  margin-bottom: 2rem;
  z-index: 10;
  @media screen and (min-width: 680px) {
    display: none;
  }
`;

export const CartImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  bottom: 0;
  left: 20%;
  margin-bottom: 2rem;
  z-index: 10;
  @media screen and (min-width: 680px) {
    display: none;
  }
`;

export const Modal = styled.div`
  position: absolute;
  bottom: -100vh;
  height: 35rem;
  width: 100%;
  transition: 1s ease;
  z-index: 5;
  display: flex;
  justify-content: center;
  &.showModal {
    position: absolute;
    bottom: 0%;
    width: 100%;
    height: 35rem;
    z-index: 5;
    transition: 0.5s ease;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    &.darkMode {
      background: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
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
