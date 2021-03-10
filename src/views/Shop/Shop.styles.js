import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from 'components/Button/Button';

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 680px) {
    align-items: center;
  }
`;

export const ProductsWrapper = styled.div`
  width: 90%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: scroll;
  @media screen and (min-width: 680px) {
    width: 80%;
    height: 70%;
  }
`;

export const ProductWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  transition: 1s ease;
  border-radius: 2rem;
  &.darkMode {
    background: rgba(0, 0, 0, 0.05);
    transition: 1s ease;
  }
  @media screen and (min-width: 680px) {
    width: 30rem;
    height: 45rem;
    &:hover {
      background: rgba(255, 255, 255, 0.2);
      &.darkMode {
        background: rgba(0, 0, 0, 0.2);
      }
    }
  }
`;

export const Product = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 35rem;
  @media screen and (min-width: 680px) {
    width: 80%;
    height: 40rem;
  }
`;

export const ProductImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: 0.5s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    transition: 1s ease;
  }
`;

export const ProductImgWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const ImageLink = styled(Link)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 0.5rem;
`;

export const NotSelectedInfo = styled.p`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.primaryLight};
  font-family: 'Montserrat';
  &.darkMode {
    text-align: center;
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const ProductName = styled.h4`
  text-align: center;
  width: 100%;
  height: auto;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 1rem;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.primaryLight};
  font-family: 'Montserrat';
  font-weight: lighter;
  font-weight: bold;
  &.darkMode {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 680px) {
    height: 20%;
  }
`;

export const SquareTopLeft = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  transform: rotate(180deg);
`;

export const SquareTopRight = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  transform: rotate(270deg);
`;

export const SquareBottomLeft = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  transform: rotate(90deg);
`;

export const SquareBottomRight = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const StyledLink = styled(Link)`
  width: 100%;
  height: auto;
  text-decoration: none;
`;

export const StyledButton = styled(Button)`
  margin-bottom: 1rem;
`;
