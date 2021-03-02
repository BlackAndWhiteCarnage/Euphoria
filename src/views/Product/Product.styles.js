import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#505050, #000000, #1d1d1d);
  color: ${({ theme }) => theme.colors.primaryLight};
  &.darkMode {
    background: linear-gradient(#e0e0e0, #b8b8b8, #e0e0e0);
    color: ${({ theme }) => theme.colors.primaryDark};
  }
  span {
    color: ${({ theme }) => theme.colors.primaryRed};
  }
`;

export const ProductWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 680px) {
    flex-direction: row;
    justify-content: center;
    width: 80%;
    height: 70%;
  }
  @media screen and (min-width: 1200px) {
    width: 55%;
    height: 60%;
  }
  @media screen and (min-width: 1400px) {
    width: 50%;
  }
`;

export const ProductWrapper1 = styled.div`
  position: relative;
  width: 95%;
  height: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media screen and (min-width: 680px) {
    width: 100%;
    height: 70%;
  }
`;

export const ProductName = styled.p`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-family: 'Montserrat';
  font-weight: bold;
  @media screen and (min-width: 680px) {
    display: none;
  }
`;

export const ProductNameDesktop = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-family: 'Montserrat';
  font-weight: bold;
  @media screen and (max-width: 680px) {
    display: none;
  }
`;

export const ImageAndDescWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.5s ease;
  &.bigImage {
    position: fixed;
    /* position: absolute; */
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    transition: 0.5s ease;
  }
  @media screen and (min-width: 680px) {
    height: 100%;
    justify-content: space-between;
  }
`;

export const ProductImage = styled.img`
  object-fit: cover;
  width: 48%;
  height: 100%;
  cursor: pointer;
  transition: 1s ease;
  &.media {
    display: none;
  }
  &.bigImage {
    width: 30%;
    height: 90%;
    margin: 5rem;
    transition: 1s ease;
    @media screen and (max-width: 680px) {
      width: 45%;
      height: 70%;
      margin: 1rem;
    }
  }
  @media screen and (min-width: 680px) {
    width: 28%;
    &.media {
      display: block;
    }
  }
  @media screen and (min-width: 1200px) {
    width: 25%;
  }
`;

export const Description = styled.p`
  width: 48%;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-family: 'Montserrat';
  @media screen and (min-width: 430px) {
    line-height: 1.8rem;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media screen and (max-height: 580px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
  @media screen and (min-width: 680px) {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  @media screen and (min-width: 1200px) {
    line-height: 2rem;
  }
  &.bigImage {
    display: none;
  }
`;

export const ProductWrapper2 = styled.div`
  width: 95%;
  height: 25%;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 680px) {
    display: none;
  }
`;

export const CostAndInfoWrapper = styled.div`
  width: 48%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ExtrasInfo = styled.p`
  width: 100%;
  height: 50%;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-family: 'Montserrat';
  font-weight: bold;
  @media screen and (max-height: 580px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export const ExtrasInfoDesktop = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-family: 'Montserrat';
  font-weight: bold;
  @media screen and (max-width: 680px) {
    display: none;
  }
  @media screen and (min-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSize.m};
    line-height: 2rem;
  }
`;

export const CostsInfoWrapper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-family: 'Montserrat';
  @media screen and (max-height: 580px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  @media screen and (min-width: 680px) {
    display: none;
  }
`;

export const CostsInfoWrapperDesktop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 35rem;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-family: 'Montserrat';
  @media screen and (max-height: 580px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  @media screen and (max-width: 680px) {
    display: none;
  }
  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const Cost = styled.p`
  width: 100%;
  height: 10%;
  font-weight: bold;
  @media screen and (min-width: 680px) {
    width: auto;
  }
`;

export const BackIcon = styled.img`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  z-index: 200;
  @media screen and (min-width: 680px) {
    top: 0;
    right: 0;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 48%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 680px) {
    display: none;
  }
`;

export const ButtonsWrapperDesktop = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  width: 30rem;
  @media screen and (max-width: 680px) {
    display: none;
  }
  @media screen and (min-width: 1200px) {
    width: 40%;
  }
`;

export const Button = styled.button`
  position: relative;
  width: 100%;
  height: 4rem;
  border: 1px solid #e7e7e7;
  background: none;
  font-family: 'Montserrat';
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.primaryLight};
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
      height: 0%;
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
    width: 30%;
  }
`;
