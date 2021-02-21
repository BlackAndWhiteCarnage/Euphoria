import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: none;
  border: none;
  text-align: start;
  @media screen and (min-width: 680px) {
    justify-content: center;
  }
`;

export const SectionContentWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media screen and (min-width: 680px) {
    height: 50%;
  }
`;

export const SectionHeader = styled.h1`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat';
  font-weight: lighter;
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: clamp(4rem, 6vw, 5rem);
  transition: 1.5s ease;
  &.darkMode {
    color: ${({ theme }) => theme.colors.primaryDark};
    transition: 1.5s ease;
  }
  @media screen and (min-width: 680px) {
    width: 80%;
    justify-content: flex-start;
  }
  @media screen and (min-width: 1020px) {
    justify-content: flex-start;
    width: 50%;
  }
`;

export const SectionContent = styled.p`
  width: 100%;
  height: 70%;
  display: flex;
  font-family: 'Montserrat';
  font-weight: lighter;
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fontSize.s};
  transition: 1.5s ease;
  &.darkMode {
    transition: 1.5s ease;
    color: ${({ theme }) => theme.colors.primaryDark};
  }
  @media screen and (min-width: 400px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media screen and (min-width: 680px) {
    width: 80%;
  }
  @media screen and (min-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSize.m};
    width: 50%;
  }
`;
