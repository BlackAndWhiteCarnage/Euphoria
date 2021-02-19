import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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
  @media screen and (min-width: 680px) {
    font-size: ${({ theme }) => theme.fontSize.m};
    width: 80%;
  }
  @media screen and (min-width: 1020px) {
    font-size: ${({ theme }) => theme.fontSize.m};
    width: 50%;
  }
`;