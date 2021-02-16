import React from 'react';
import styled from 'styled-components';
import AreWeBuyingIcon from 'assets/icons/AreWeBuying.svg';
import { SectionTitle } from 'views/WhyMe/WhyMe.styles';

const Contact = () => {
  return (
    <Wrapper>
      <SectionTitle src={AreWeBuyingIcon} />
      <HowToBuy>
        <Steps>
          <Step>
            <Circle />
            <p>
              Aby złożyć zamówienie wejdź w interesującą Cię kategorię, dodaj
              produkt do koszyka po czym wypełnij formularz kontaktowy
            </p>
          </Step>
          <Step>
            <Circle />
            <p>
              Następnie zamówienie trafia do mnie gdzie ustalamy szczegóły oraz
              koszta
            </p>
          </Step>
          <Step>
            <Circle />
            <p>
              Po tym otrzymasz ode mnie numer konta bankowego na które
              przelejesz ustaloną kwotę
            </p>
          </Step>
          <Step>
            <Circle />
            <p>
              Zaczynam przygotowywać Twoje majteczki, skarpetki lub inną wybraną
              rzecz według naszych ustaleń
            </p>
          </Step>
          <Step>
            <Circle />
            <p>Paczuszka zostaje do Ciebie wysłana! </p>
          </Step>
        </Steps>
      </HowToBuy>
      <ContactWrapper>
        <Form>
          <Label>Adres e-mail</Label>
          <Input />
          <Label>Wiadomość</Label>
          <Textarea />
        </Form>
      </ContactWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

const HowToBuy = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* @media screen and (min-width: 680px) {
    height: 100%;
    flex-direction: row;
  } */
`;

const Circle = styled.div`
  min-width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.primaryRed};
  @media screen and (min-width: 680px) {
    min-width: 3rem;
    height: 3rem;
  }
`;

const Steps = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
`;

const Step = styled.li`
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-around;
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-bottom: 2rem;
  p {
    width: 80%;
  }
  @media screen and (min-width: 680px) {
    font-size: ${({ theme }) => theme.fontSize.m};
    margin-bottom: 3rem;
  }
`;

const ContactWrapper = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primaryRed};
  @media screen and (min-width: 680px) {
    height: 50%;
  }
  @media screen and (min-width: 1200px) {
    height: 100%;
    width: 40%;
    align-items: flex-start;
    justify-content: space-around;
    margin-right: 14rem;
  }
`;

const Form = styled.form`
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1200px) {
    width: 70%;
    margin-left: 4vw;
  }
`;

const Label = styled.label`
  width: 100%;
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  height: 2rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: ${({ theme }) => theme.fontSize.s};
  border: none;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 8rem;
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: ${({ theme }) => theme.fontSize.s};
  resize: none;
  border: none;
`;

export default Contact;
