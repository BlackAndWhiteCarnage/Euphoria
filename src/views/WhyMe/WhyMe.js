import React from 'react';
import styled from 'styled-components';
import WhyMeIcon from 'assets/icons/WhyMe.svg';
import Image2 from 'assets/images/Image2.jpg';

const WhyMe = () => {
  return (
    <Wrapper>
      <SectionTitle src={WhyMeIcon} />
      <Info>
        <Line />
        <InfoContent>
          Zacznę od tego że do każdego klienta podchodzę indywidualnie. Kupując
          majteczki lub inny produkt masz gwarancję dyskrecji oraz tego że
          pozostaniesz anonimowy a ja będę mogła zaangażować się w Twoje
          zamówienie. Ba! Składając je, nie musisz nawet podawać imienia.
          Zamówienia zawsze są zapakowane starannie w pudełeczko oraz owinięte
          papierem prezentowym ze wstążeczką a do tego całość zawsze akcentuje
          zapachem moich ulubionych perfum. Same majteczki także są wysokich
          lotów bo większość z nich jest bawełniana a co za tym idzie lepiej
          chłoną mój zapach i dłużej go utrzymują. Ponadto każda sztuka pakowana
          jest w woreczek strunowy. A tak o sobie samej powiem że mam 20 lat
          więc jestem młodziutka, seksowna i cholernie zboczona. O więcej
          szczegółów będziesz musiał spytać sam.
        </InfoContent>
        <Image src={Image2} />
      </Info>
    </Wrapper>
  );
};

const Wrapper = styled.section`
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

const SectionTitle = styled.img`
  width: 90%;
  @media screen and (min-width: 680px) {
    width: 70%;
    top: 1rem;
  }
  @media screen and (min-width: 1200px) {
    position: absolute;
  }
`;

const Image = styled.img`
  width: 45%;
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
`;

const Info = styled.div`
  width: 90%;
  height: 80%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 1200px) {
    justify-content: space-around;
    width: 95%;
  }
`;

const InfoContent = styled.p`
  width: 50%;
  margin-left: 1rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.primaryLight};
  @media screen and (min-width: 680px) {
    width: 40%;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media screen and (min-width: 1200px) {
    width: 75%;
    margin-top: 20%;
    font-size: ${({ theme }) => theme.fontSize.l};
    line-height: 3.5rem;
  }
`;

const Line = styled.div`
  width: 2%;
  height: 80%;
  background: ${({ theme }) => theme.colors.primaryRed};
  @media screen and (min-width: 680px) {
    height: 90%;
  }
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export default WhyMe;
