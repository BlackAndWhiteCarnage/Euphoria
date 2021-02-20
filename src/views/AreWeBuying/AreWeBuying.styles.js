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
  border: none;
  background: none;
  text-align: start;
  @media screen and (min-width: 680px) {
    justify-content: center;
  }
`;

export const SectionHeader = styled.h1`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat';
  font-weight: lighter;
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: clamp(4rem, 6vw, 5rem);
  &.darkMode {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
  @media screen and (min-width: 680px) {
    width: 80%;
    height: 10%;
    justify-content: flex-start;
  }
  @media screen and (min-width: 1020px) {
    justify-content: flex-start;
    width: 50%;
  }
`;

export const StepsWrapper = styled.ul`
  width: 80%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media screen and (min-width: 680px) {
    font-size: ${({ theme }) => theme.fontSize.m};
    width: 80%;
    height: 40%;
  }
  @media screen and (min-width: 1020px) {
    width: 50%;
  }
`;

export const Step = styled.li`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.primaryLight};
  font-family: 'Montserrat';
  &.darkMode {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const StepContent = styled.p`
  width: 80%;
  height: auto;
  @media screen and (min-width: 680px) {
    width: 90%;
  }
`;

export const IconWrapper = styled.div`
  position: relative;
  min-width: 3rem;
  height: 3rem;
  border: 1px solid #e7e7e7;
  &.darkMode {
    border: 1px solid #2d2d2d;
  }
  @media screen and (min-width: 680px) {
    min-width: 5rem;
    height: 5rem;
  }
`;

export const Icon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 2.5rem;
  height: 2.5rem;
  @media screen and (min-width: 680px) {
    width: 3.5rem;
    height: 3.5rem;
  }
`;
