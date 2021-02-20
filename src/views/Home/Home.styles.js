import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
`;

export const ButtonWrapper = styled.button`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: none;
  border: none;
  @media screen and (min-width: 680px) {
    justify-content: center;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 50%;
  height: 50%;
  margin-top: 5rem;
  &.darkMode {
    &::before {
      border: 1px solid #2d2d2d;
    }
  }
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

export const Logo = styled.img`
  position: absolute;
  left: 50%;
  height: 20%;
  bottom: -5rem;
  transform: translate(-50%);
  z-index: 2;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  &.show {
    opacity: 1;
    object-fit: cover;
    transition: 1s ease;
  }
  &.hide {
    position: absolute;
    opacity: 0;
  }
`;

export const AllIconsWrapper = styled.div`
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

export const DarkModeIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin-top: 5rem;
  flex-basis: 25%;
`;

export const IconsWrapper = styled.div`
  height: 25%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20%;
`;

export const Icon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;
