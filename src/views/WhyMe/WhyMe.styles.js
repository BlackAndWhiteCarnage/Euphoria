import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  @media screen and (min-width: 1200px) {
    align-items: flex-start;
  }
`;

export const SectionTitle = styled.img`
  width: 90%;
  height: 20%;
  @media screen and (min-width: 680px) {
    width: 70%;
    top: 1rem;
  }
  @media screen and (min-width: 1200px) {
    position: absolute;
    margin: 2.5rem;
    height: 50%;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 50%;
  height: 80%;
  object-fit: cover;
  @media screen and (min-width: 680px) {
    width: 30%;
    height: 90%;
  }
  @media screen and (min-width: 1200px) {
    width: 20%;
    height: 100%;
    margin-right: 5rem;
  }
  &::before {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    content: '';
    width: 100%;
    height: 100%;
    border: 2px solid #b80202;
    z-index: -1;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media screen and (min-width: 1200px) {
    margin-left: 2rem;
  }
`;

export const Info = styled.div`
  width: 95%;
  height: 80%;
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 1200px) {
    justify-content: space-around;
    width: 95%;
    margin-top: 5rem;
  }
`;

export const InfoContent = styled.p`
  position: relative;
  width: 70%;
  margin-right: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.primaryLight};
  font-family: 'Montserrat', sans-serif;
  @media screen and (min-width: 680px) {
    width: 40%;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media screen and (max-height: 570px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
  @media screen and (min-width: 1200px) {
    margin-right: 0;
    width: 70%;
    margin-top: 25%;
    font-size: ${({ theme }) => theme.fontSize.l};
    line-height: 3.5rem;
  }
`;
