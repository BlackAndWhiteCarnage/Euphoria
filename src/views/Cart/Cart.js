import React, { useState } from 'react';
import {
  Label,
  TextArea,
  StyledButton,
  InfoIcon,
  InfoText,
  InfoWrapper,
  Items,
  Item,
  Price,
  Form,
  Header,
  Input,
  Wrapper,
  CartWrapper,
  ItemsWrapper,
  ParamsWrapper,
  BackIcon,
} from './Cart.styles';
import Info from 'assets/icons/Info.svg';
import DarkInfo from 'assets/icons/DarkInfo.svg';
import Back from 'assets/icons/Back.svg';

const Cart = ({ darkMode, previousPathHandler }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <Wrapper className={darkMode && 'darkMode'}>
      <CartWrapper>
        <BackIcon src={Back} onClick={previousPathHandler} />
        <ItemsWrapper>
          <Header>Koszyk</Header>
          <ParamsWrapper>
            <p>Przedmiot</p>
            <p>Cena</p>
          </ParamsWrapper>
          <Items>
            <Item className={darkMode && 'darkMode'}>
              <p>Bordowe Śliskie Stringi</p>
              <Price>
                <span>50</span> zł
              </Price>
            </Item>
          </Items>
        </ItemsWrapper>
        <Form>
          <Header>Formularz kontaktowy</Header>
          <Label>Pseudonim</Label>
          <Input className={darkMode && 'darkMode'} />
          <Label>Adres e-mail</Label>
          <Input className={darkMode && 'darkMode'} />
          <Label>Wiadomość</Label>
          <TextArea className={darkMode && 'darkMode'} />
          <StyledButton text={'spytaj o dostępność'} className={darkMode && 'darkMode'} />
          <InfoIcon src={darkMode ? DarkInfo : Info} onClick={() => setShowInfo(!showInfo)} />
          <InfoWrapper className={`${showInfo && 'showInfo'} ${darkMode && ' darkMode'}`} onClick={() => setShowInfo(!showInfo)}>
            <InfoText className={showInfo && 'showInfo'}>
              Podając dane nie musisz wpisywać swojego prawdziwego imienia a informację które dostanę będą wykorzystane jedynie w celach
              kontaktowo/wysyłkowych. Nie martw się dostanę zawartość Twojego koszyka na maila i sprawdzę czy podane produkty są wciąż dostępne. Jeśli
              nie czujesz się komfortowo wypełniając formularz możesz wysłać jedynie wiadomość lub skontaktować się ze mną poprzez którąś z poniższych
              opcji. Gdy tylko zobaczę Twoją wiadomość na pewno odpiszę i ustalimy szczególy.
            </InfoText>
            <InfoText className={showInfo && 'showInfo'}>Ps. Nie zapomnij dodać informacji o dodatkach jakie wybierasz!</InfoText>
          </InfoWrapper>
        </Form>
      </CartWrapper>
    </Wrapper>
  );
};

export default Cart;
