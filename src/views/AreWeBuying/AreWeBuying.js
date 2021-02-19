import React from 'react';
import {
  Wrapper,
  SectionHeader,
  StepsWrapper,
  Step,
  IconWrapper,
  Icon,
  StepContent,
} from './AreWeBuying.styles';
import AddToCart from 'assets/icons/AddToCart.svg';
import SendEmail from 'assets/icons/SendEmail.svg';
import Payment from 'assets/icons/Payment.svg';
import InProgress from 'assets/icons/InProgress.svg';
import Send from 'assets/icons/Send.svg';

const Contact = () => {
  return (
    <Wrapper>
      <SectionHeader>KUPUJEMY?</SectionHeader>
      <StepsWrapper>
        <Step>
          <IconWrapper>
            <Icon src={AddToCart} />
          </IconWrapper>
          <StepContent>
            Aby złożyć zamówienie wejdź w interesującą Cię kategorię, dodaj
            produkt do koszyka po czym wypełnij formularz kontaktowy
          </StepContent>
        </Step>
        <Step>
          <IconWrapper>
            <Icon src={SendEmail} />
          </IconWrapper>
          <StepContent>
            Następnie zamówienie trafia do mnie gdzie ustalamy szczegóły oraz
            koszta
          </StepContent>
        </Step>
        <Step>
          <IconWrapper>
            <Icon src={Payment} />
          </IconWrapper>
          <StepContent>
            Po tym otrzymasz ode mnie numer konta bankowego na które przelejesz
            ustaloną kwotę
          </StepContent>
        </Step>
        <Step>
          <IconWrapper>
            <Icon src={InProgress} />
          </IconWrapper>
          <StepContent>
            Zaczynam przygotowywać Twoje majteczki, skarpetki lub inną wybraną
            rzecz według naszych ustaleń
          </StepContent>
        </Step>
        <Step>
          <IconWrapper>
            <Icon src={Send} />
          </IconWrapper>
          <StepContent>Paczuszka zostaje do Ciebie wysłana!</StepContent>
        </Step>
      </StepsWrapper>
    </Wrapper>
  );
};

export default Contact;
