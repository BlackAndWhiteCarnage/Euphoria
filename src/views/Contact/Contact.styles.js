import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #202020;
  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const SectionTitle = styled.img`
  width: 90%;
  height: 6rem;
  margin: auto;
  margin-top: 1rem;
  @media screen and (min-width: 1200px) {
    position: absolute;
    width: auto;
    height: 20%;
  }
`;

export const HowToBuy = styled.div`
  width: 90%;
  height: 45%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1200px) {
    height: 100%;
    justify-content: center;
  }
`;

export const Circle = styled.div`
  position: relative;
  min-width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.primaryRed};
  @media screen and (min-width: 680px) {
    min-width: 3rem;
    height: 3rem;
  }
  @media screen and (min-width: 1200px) {
    min-width: 10rem;
    height: 10rem;
  }
`;

export const Icon = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 4rem;
  height: 4rem;
  @media screen and (min-width: 1200px) {
    width: 10rem;
    height: 10rem;
  }
`;

export const Steps = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
  @media screen and (min-width: 1200px) {
    margin-top: 30rem;
    height: 100%;
    justify-content: space-around;
  }
`;

export const Step = styled.li`
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-bottom: 1.5rem;
  font-family: 'Montserrat', sans-serif;
  @media screen and (max-height: 570px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
  p {
    width: 85%;
  }
  @media screen and (min-width: 680px) {
    font-size: ${({ theme }) => theme.fontSize.m};
    margin-bottom: 3rem;
  }
`;

export const ContactWrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.primaryRed};
  @media screen and (min-height: 640px) {
    justify-content: center;
  }
  @media screen and (min-width: 1200px) {
    height: 100%;
    width: 40%;
    justify-content: space-around;
    margin-right: 12rem;
  }
`;

export const Form = styled.form`
  width: 90%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-height: 640px) {
    justify-content: flex-start;
  }
  @media screen and (min-width: 1200px) {
    width: 80%;
  }
`;

export const Label = styled.label`
  position: relative;
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-bottom: 0.5rem;
  &:first-child {
    margin-top: 1rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: ${({ theme }) => theme.fontSize.m};
  border: none;
  @media screen and (min-width: 1200px) {
    height: 4rem;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 8rem;
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: ${({ theme }) => theme.fontSize.m};
  resize: none;
  border: none;
  margin-bottom: 1rem;
  @media screen and (min-width: 1200px) {
    height: 20rem;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 4rem;
  border: none;
  background: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-family: 'Montserrat', sans-serif;
`;
