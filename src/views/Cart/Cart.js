import React, { useState, useEffect } from 'react';
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
  DeleteIcon,
  ImagePreviewIcon,
  Image,
  ImageWrapper,
} from './Cart.styles';
import Info from 'assets/icons/Info.svg';
import DarkInfo from 'assets/icons/DarkInfo.svg';
import Back from 'assets/icons/Back.svg';
import DarkBack from 'assets/icons/DarkBack.svg';
import Delete from 'assets/icons/Delete.svg';
import DarkDelete from 'assets/icons/DarkDelete.svg';
import ImagePreview from 'assets/icons/ImagePreview.svg';
import DarkImagePreview from 'assets/icons/DarkImagePreview.svg';

const Cart = ({ darkMode, previousPathHandler, cart, setCart }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [cartCopy, setCartCopy] = useState([...cart]);
  const [toggle, setToggle] = useState();

  const deleteItemHandler = (index) => {
    cartCopy.splice(index, 1);
    setCart(cartCopy);
  };

  let cartValues = cart.map((item) => {
    return item.cost;
  });

  let summary = () => {
    if (cartValues.length !== 0) {
      return cartValues.reduce((a, b) => a + b).toFixed(2);
    } else {
      return '0';
    }
  };

  return (
    <Wrapper className={darkMode && 'darkMode'}>
      <CartWrapper>
        <BackIcon src={darkMode ? DarkBack : Back} onClick={previousPathHandler} />
        <ItemsWrapper>
          <Header>Koszyk</Header>
          <ParamsWrapper>
            <p>Przedmiot</p>
            <p>Cena</p>
          </ParamsWrapper>
          <Items>
            {cart.length !== 0 &&
              cart.map((item, index) => (
                <Item className={darkMode && 'darkMode'} key={item.id}>
                  <p>{item.name}</p>
                  <Price>
                    <span>{item.cost}</span> zł
                  </Price>
                  {toggle === index && (
                    <ImageWrapper onClick={() => setToggle(toggle !== index && index)}>
                      <Image src={item.mainImages[0]} />
                    </ImageWrapper>
                  )}
                  <ImagePreviewIcon src={darkMode ? ImagePreview : DarkImagePreview} onClick={() => setToggle(toggle !== index && index)} />
                  <DeleteIcon src={darkMode ? Delete : DarkDelete} onClick={() => deleteItemHandler(index)} />
                </Item>
              ))}
          </Items>
          <ParamsWrapper>
            {cart.length !== 0 ? (
              <p>
                Razem <span>{summary()}</span> zł
              </p>
            ) : (
              <p>koszyk jest pusty</p>
            )}
          </ParamsWrapper>
        </ItemsWrapper>
        <Form>
          <Header>Formularz zakupowy</Header>
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
