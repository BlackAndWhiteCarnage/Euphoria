import React from 'react';
import styled from 'styled-components';
import AreWeBuyingIcon from 'assets/icons/AreWeBuying.svg';

const AreWeBuying = () => {
  return (
    <Wrapper>
      <SectionWrapper>
        <SectionTitle src={AreWeBuyingIcon} />
        <HowToBuy>
          <HowToBuyItem>
            <Line />
            Aby złożyć zamówienie wejdź w interesującą Cię kategorię, dodaj
            produkt do koszyka po czym wypełnij formularz kontaktowy
          </HowToBuyItem>
          <HowToBuyItem>
            <Line />
            Następnie zamówienie trafia do mnie gdzie ustalamy szczegóły oraz
            koszta
          </HowToBuyItem>
          <HowToBuyItem>
            <Line />
            Po tym otrzymasz ode mnie numer konta bankowego na które przelejesz
            ustaloną kwotę
          </HowToBuyItem>
          <HowToBuyItem>
            <Line />
            Zaczynam przygotowywać Twoje majteczki, skarpetki lub inną wybraną
            rzecz według naszych ustaleń
          </HowToBuyItem>
          <HowToBuyItem>
            <Line />
            Paczuszka zostaje do Ciebie wysłana!
          </HowToBuyItem>
        </HowToBuy>
      </SectionWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const SectionWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.img`
  width: 90%;
  margin-top: 1rem;
  @media screen and (max-height: 1200px) {
    margin-right: auto;
    width: 80%;
    margin-left: 4rem;
  }
`;

const HowToBuy = styled.ul`
  list-style: none;
  font-family: 'Montserrat', sans-serif;
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 70%;
  @media screen and (max-height: 1200px) {
    width: 60%;
    height: 50%;
    margin-right: auto;
    margin-left: 4rem;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 3px;
  background: #b80202;
  margin-bottom: 0.5rem;
`;

const HowToBuyItem = styled.li`
  width: 100%;
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fontSize.m};
  @media screen and (max-height: 570px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  @media screen and (min-width: 680px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export default AreWeBuying;
