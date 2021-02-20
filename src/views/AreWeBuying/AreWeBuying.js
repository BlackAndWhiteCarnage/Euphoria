import React from 'react';
import {
  Wrapper,
  ButtonWrapper,
  SectionHeader,
  StepsWrapper,
  Step,
  IconWrapper,
  Icon,
  StepContent,
} from './AreWeBuying.styles';
import AddToCart from 'assets/icons/AddToCart.svg';
import DarkAddToCart from 'assets/icons/DarkAddToCart.svg';
import SendEmail from 'assets/icons/SendEmail.svg';
import DarkSendEmail from 'assets/icons/DarkSendEmail.svg';
import Payment from 'assets/icons/Payment.svg';
import DarkPayment from 'assets/icons/DarkPayment.svg';
import InProgress from 'assets/icons/InProgress.svg';
import DarkInProgress from 'assets/icons/DarkInProgress.svg';
import Send from 'assets/icons/Send.svg';
import DarkSend from 'assets/icons/DarkSend.svg';

const AreWeBuying = ({ darkMode }) => {
  return (
    <Wrapper>
      <ButtonWrapper>
        <SectionHeader className={darkMode && 'darkMode'}>
          KUPUJEMY?
        </SectionHeader>
        <StepsWrapper>
          <Step className={darkMode && 'darkMode'}>
            <IconWrapper className={darkMode && 'darkMode'}>
              <Icon src={darkMode ? DarkAddToCart : AddToCart} />
            </IconWrapper>
            <StepContent>
              Aby złożyć zamówienie wejdź w interesującą Cię kategorię, dodaj
              produkt do koszyka po czym wypełnij formularz kontaktowy
            </StepContent>
          </Step>
          <Step className={darkMode && 'darkMode'}>
            <IconWrapper className={darkMode && 'darkMode'}>
              <Icon src={darkMode ? DarkSendEmail : SendEmail} />
            </IconWrapper>
            <StepContent>
              Następnie zamówienie trafia do mnie gdzie ustalamy szczegóły oraz
              koszta
            </StepContent>
          </Step>
          <Step className={darkMode && 'darkMode'}>
            <IconWrapper className={darkMode && 'darkMode'}>
              <Icon src={darkMode ? DarkPayment : Payment} />
            </IconWrapper>
            <StepContent>
              Po tym otrzymasz ode mnie numer konta bankowego na które
              przelejesz ustaloną kwotę
            </StepContent>
          </Step>
          <Step className={darkMode && 'darkMode'}>
            <IconWrapper className={darkMode && 'darkMode'}>
              <Icon src={darkMode ? DarkInProgress : InProgress} />
            </IconWrapper>
            <StepContent>
              Zaczynam przygotowywać Twoje majteczki, skarpetki lub inną wybraną
              rzecz według naszych ustaleń
            </StepContent>
          </Step>
          <Step className={darkMode && 'darkMode'}>
            <IconWrapper className={darkMode && 'darkMode'}>
              <Icon src={darkMode ? DarkSend : Send} />
            </IconWrapper>
            <StepContent>Paczuszka zostaje do Ciebie wysłana!</StepContent>
          </Step>
        </StepsWrapper>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default AreWeBuying;
