import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: linear-gradient(#505050, #000000, #1d1d1d);
  &.darkMode {
    background: linear-gradient(#e0e0e0, #b8b8b8, #e0e0e0);
  }
  @media screen and (min-width: 680px) {
    align-items: center;
  }
`;

export const ProductsWrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: scroll;
  justify-content: center;
  @media screen and (min-width: 680px) {
    width: 80%;
    height: 60rem;
  }
`;

export const ProductWrapper = styled.div`
  position: relative;
  width: 25rem;
  min-height: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  background: rgba(255, 255, 255, 0.05);
  transition: 1s ease;
  &.darkMode {
    background: rgba(0, 0, 0, 0.05);
    transition: 1s ease;
  }
  @media screen and (min-width: 680px) {
    width: 30rem;
    height: 50rem;
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
  height: 70%;
  overflow: hidden;
  border-radius: 3px;
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

export const Button = styled.button`
  position: relative;
  width: 20rem;
  height: 3.5rem;
  border: 1px solid #e7e7e7;
  background: none;
  font-family: 'Montserrat';
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fontSize.m};
  cursor: pointer;
  transition: 1.5s ease;
  &.darkMode {
    color: ${({ theme }) => theme.colors.primaryDark};
    border: 1px solid #2d2d2d;
    transition: 1.5s ease;
    &::before {
      position: absolute;
      left: 0;
      bottom: 0;
      content: '';
      width: 100%;
      height: 100%;
      background: #2d2d2d;
      z-index: -1;
      transition: 0.5s ease;
    }
    &:hover {
      color: ${({ theme }) => theme.colors.primaryLight};
      transition: 1.5s ease;
      &::before {
        position: absolute;
        left: 0;
        top: 0;
        content: '';
        width: 100%;
        height: 100%;
        background: #2d2d2d;
        z-index: -1;
        transition: 0.5s ease;
      }
    }
  }
  &::before {
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    width: 100%;
    height: 0%;
    background: #e7e7e7;
    z-index: -1;
    transition: 0.5s ease;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
    transition: 1.5s ease;
    &::before {
      position: absolute;
      left: 0;
      top: 0;
      content: '';
      width: 100%;
      height: 100%;
      background: #e7e7e7;
      z-index: -1;
      transition: 0.5s ease;
    }
  }
  @media screen and (min-width: 680px) {
    width: 100%;
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
