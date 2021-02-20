import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 5;
  @media screen and (min-width: 680px) {
    justify-content: center;
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
  @media screen and (min-width: 680px) {
    width: 50%;
    height: 20%;
    justify-content: flex-start;
  }
  @media screen and (min-width: 1020px) {
    justify-content: center;
    width: 30%;
  }
`;

export const Form = styled.form`
  width: 80%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 680px) {
    width: 50%;
  }
  @media screen and (min-width: 1020px) {
    width: 30%;
  }
`;

export const Label = styled.label`
  width: 100%;
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-family: 'Montserrat';
`;

export const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-family: 'Montserrat';
  border: 1px solid #e7e7e7;
  background: none;
  @media screen and (min-width: 680px) {
    height: 3.5rem;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 10rem;
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-family: 'Montserrat';
  border: 1px solid #e7e7e7;
  background: none;
  resize: none;
  @media screen and (min-width: 680px) {
    height: 15rem;
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
`;

export const Button = styled.button`
  position: relative;
  width: 8rem;
  height: 4rem;
  border: 1px solid #e7e7e7;
  background: none;
  font-family: 'Montserrat';
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fontSize.m};
  cursor: pointer;
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
