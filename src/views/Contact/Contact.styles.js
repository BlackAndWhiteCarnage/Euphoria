import styled from 'styled-components';
import Button from 'components/Button/Button';

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 5;
  @media screen and (min-width: 680px) {
    justify-content: flex-end;
  }
`;

export const SectionHeader = styled.h1`
  width: 100%;
  height: 15%;
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
    width: 50%;
    height: 20%;
    justify-content: flex-start;
  }
  @media screen and (min-width: 1020px) {
    justify-content: center;
    width: 30%;
    height: 10%;
  }
`;

export const Form = styled.form`
  width: 80%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.primaryLight};
  transition: 1.5s ease;
  &.darkMode {
    color: ${({ theme }) => theme.colors.primaryDark};
    transition: 1.5s ease;
  }
  @media screen and (min-width: 680px) {
    width: 50%;
  }
  @media screen and (min-width: 1020px) {
    width: 30%;
  }
`;

export const Label = styled.label`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-family: 'Montserrat';
`;

export const Input = styled.input`
  font-weight: bold;
  width: 100%;
  min-height: 3rem;
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-family: 'Montserrat';
  border: 1px solid #e7e7e7;
  background: none;
  transition: 0.5s ease;
  padding: 1rem;
  border-radius: 1rem;
  &.darkMode {
    color: ${({ theme }) => theme.colors.primaryDark};
    border: 1px solid #2d2d2d;
    transition: 1.5s ease;
  }
  @media screen and (min-width: 680px) {
    height: 3.5rem;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 10rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.primaryLight};
  border: 1px solid white;
  background: none;
  font-family: 'Montserrat';
  font-weight: bold;
  padding: 0.5rem;
  resize: none;
  border-radius: 1rem;
  transition: 0.5s ease;
  &.darkMode {
    color: ${({ theme }) => theme.colors.primaryDark};
    border: 1px solid #2d2d2d;
  }
  @media screen and (min-width: 680px) {
    height: 20rem;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const InfoAndButton = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.p`
  width: 70%;
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-family: 'Montserrat';
  transition: 1.5s ease;
  text-decoration: underline;
  &.darkMode {
    transition: 1.5s ease;
    color: ${({ theme }) => theme.colors.primaryDark};
  }
  @media screen and (min-width: 680px) {
    width: 50%;
  }
`;

export const SocialMediaWrapper = styled.div`
  width: 50%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;
`;

export const SocialMediaInfo = styled.p`
  width: 100%;
  height: auto;
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-family: 'Montserrat';
  text-align: center;
  transition: 1.5s ease;
  text-transform: uppercase;
  &.darkMode {
    transition: 1.5s ease;
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const SocialMediaIconsWrapper = styled.div`
  display: block;
  width: 100%;
  height: auto;
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-family: 'Montserrat';
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 680px) {
    display: none;
  }
`;

export const Icon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

export const StyledButton = styled(Button)`
  width: 40%;
`;
