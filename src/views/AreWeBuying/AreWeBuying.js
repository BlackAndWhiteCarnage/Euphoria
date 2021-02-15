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
            Aby złożyć zamówienie wejdź w interesującą Cię kategorię, dodaj
            produkt do koszyka po czym wypełnij formularz kontaktowy
          </HowToBuyItem>
          <HowToBuyItem>
            Następnie zamówienie trafia do mnie gdzie ustalamy szczegóły oraz
            koszta
          </HowToBuyItem>
          <HowToBuyItem>
            Po tym otrzymasz ode mnie numer konta bankowego na które przelejesz
            ustaloną kwotę
          </HowToBuyItem>
          <HowToBuyItem>
            Zaczynam przygotowywać Twoje majteczki, skarpetki lub inną wybraną
            rzecz według naszych ustaleń
          </HowToBuyItem>
          <HowToBuyItem>Paczuszka zostaje do Ciebie wysłana!</HowToBuyItem>
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
  width: 80%;
  margin-top: 2rem;
`;

const HowToBuy = styled.ol`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: 60%;
`;

const HowToBuyItem = styled.li`
  width: 100%;
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fontSize.s};
  @media screen and (min-width: 480px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media screen and (min-width: 680px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export default AreWeBuying;
