import React from 'react';
import {
  Wrapper,
  SectionTitle,
  HowToBuy,
  Steps,
  Step,
  Circle,
  Icon,
  ContactWrapper,
  Label,
  Input,
  Textarea,
  Form,
  Button,
} from './Contact.styles';
import AreWeBuyingIcon from 'assets/icons/AreWeBuying.svg';
import AddToCart from 'assets/icons/AddToCart.svg';
import SendEmail from 'assets/icons/SendEmail.svg';
import Payment from 'assets/icons/Payment.svg';
import InProgress from 'assets/icons/InProgress.svg';
import Send from 'assets/icons/Send.svg';

const Contact = () => {
  return (
    <Wrapper>
      <SectionTitle src={AreWeBuyingIcon} />
      <HowToBuy>
        <Steps>
          <Step>
            <Circle>
              <Icon src={AddToCart} />
            </Circle>
            <p>
              Aby złożyć zamówienie wejdź w interesującą Cię kategorię, dodaj
              produkt do koszyka po czym wypełnij formularz kontaktowy
            </p>
          </Step>
          <Step>
            <Circle>
              <Icon src={SendEmail} />
            </Circle>
            <p>
              Następnie zamówienie trafia do mnie gdzie ustalamy szczegóły oraz
              koszta
            </p>
          </Step>
          <Step>
            <Circle>
              <Icon src={Payment} />
            </Circle>
            <p>
              Po tym otrzymasz ode mnie numer konta bankowego na które
              przelejesz ustaloną kwotę
            </p>
          </Step>
          <Step>
            <Circle>
              <Icon src={InProgress} />
            </Circle>
            <p>
              Zaczynam przygotowywać Twoje majteczki, skarpetki lub inną wybraną
              rzecz według naszych ustaleń
            </p>
          </Step>
          <Step>
            <Circle>
              <Icon src={Send} />
            </Circle>
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
          <Button>WYŚLIJ</Button>
        </Form>
      </ContactWrapper>
    </Wrapper>
  );
};

export default Contact;
