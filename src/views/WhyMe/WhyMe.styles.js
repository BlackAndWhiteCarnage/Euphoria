import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  width: 100%;
  height: 100vh;
  @media screen and (min-width: 1200px) {
    align-items: center;
    flex-direction: row;
  }
`;

export const SectionTitle = styled.img`
  width: 90%;
  height: 20%;
  @media screen and (min-width: 1200px) {
    height: auto;
    width: 90%;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 45%;
  height: 90%;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1200px) {
    margin-right: 12rem;
    width: 40%;
    height: 85%;
  }
`;

export const Image = styled.img`
  width: 90%;
  height: 90%;
  object-fit: cover;
  @media screen and (min-width: 1200px) {
    width: 60%;
    height: 100%;
  }
`;

export const Shape = styled.img`
  position: absolute;
  top: -20%;
  left: 0;
  width: 100%;
  z-index: -1;
`;

export const Info = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1200px) {
    width: 60%;
  }
`;

export const InfoContent = styled.p`
  position: relative;
  width: 90%;
  height: 100%;
  margin-right: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.primaryLight};
  font-family: 'Montserrat', sans-serif;
  @media screen and (min-width: 680px) {
    margin-top: 5rem;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media screen and (max-height: 570px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
  @media screen and (min-width: 1200px) {
    width: 90%;
    height: 50%;
    font-size: ${({ theme }) => theme.fontSize.m};
    line-height: 3rem;
  }
`;
