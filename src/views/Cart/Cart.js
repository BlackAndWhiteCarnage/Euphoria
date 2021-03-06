import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'components/Button/Button';
import Info from 'assets/icons/Info.svg';
import DarkInfo from 'assets/icons/DarkInfo.svg';

const Cart = ({ darkMode }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <Wrapper className={darkMode && 'darkMode'}>
      <CartWrapper>
        <ItemsWrapper>
          <Header>Koszyk</Header>
          <ParamsWrapper>
            <p>Przedmiot</p>
            <p>Cena</p>
          </ParamsWrapper>
          <Items>
            <Item>
              <p>Bordowe Śliskie Stringi</p>
              <p>
                <span>50</span> zł
              </p>
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
          <StyledButton text={'wyślij'} className={darkMode && 'darkMode'} />
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

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primaryLight};
  font-family: 'Montserrat';
  overflow: hidden;
  background: linear-gradient(#1d1d1d, #000000, #505050);
  &.darkMode {
    color: ${({ theme }) => theme.colors.primaryDark};
    background: linear-gradient(#d3d3d3, #ececec, #f3f3f3);
  }
  @media screen and (min-width: 680px) {
    align-items: center;
  }
`;
const CartWrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 680px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    height: 60%;
  }
`;
const Header = styled.h4`
  display: flex;
  align-items: center;
  width: 100%;
  height: 15%;
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 1rem 0;
  @media screen and (min-width: 680px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;
const ParamsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10%;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
  @media screen and (min-width: 680px) {
    font-size: ${({ theme }) => theme.fontSize.m};
    width: 95%;
  }
`;
const Items = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 65%;
  overflow-y: scroll;
  @media screen and (min-width: 680px) {
    height: 70%;
  }
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 3rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-top: 1rem;
  cursor: pointer;
  &:last-child {
    border: none;
  }
  span {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primaryRed};
  }
  @media screen and (min-width: 680px) {
    font-size: ${({ theme }) => theme.fontSize.m};
    min-height: 8rem;
    width: 95%;
    border-bottom: 1px solid #b80202;
    transition: 0.5s ease;
    &:hover {
      background: rgba(0, 0, 0, 1);
      transition: 0.5s ease;
    }
  }
`;
const ItemsWrapper = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 680px) {
    width: 45%;
    height: 100%;
  }
`;
const Form = styled.form`
  position: relative;
  width: 100%;
  height: 65%;
  display: flex;
  flex-direction: column;
  h4 {
    color: ${({ theme }) => theme.colors.primaryRed};
  }
  @media screen and (min-width: 680px) {
    width: 45%;
    height: 100%;
    justify-content: space-between;
  }
`;
const InfoWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.7);

  color: ${({ theme }) => theme.colors.primaryLight};
  z-index: 10;
  border-radius: 20px;
  width: 0%;
  height: 0%;
  transition: 1s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  opacity: 0;
  pointer-events: none;
  overflow: hidden;
  cursor: pointer;
  &.darkMode {
    color: ${({ theme }) => theme.colors.primaryDark};
    background: rgba(255, 255, 255, 0.7);
  }
  &.showInfo {
    pointer-events: all;
    opacity: 1;
    width: 120%;
    height: 120%;
    transition: 1s ease;
    @media screen and (max-width: 680px) {
      width: 110%;
      height: 105%;
    }
  }
`;
const InfoText = styled.p`
  opacity: 0;
  width: 80%;
  height: auto;
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 2rem;
  font-weight: bold;
  transition: 3s ease;
  &.showInfo {
    transition: 3s ease;
    opacity: 1;
  }
  @media screen and (max-width: 680px) {
    font-size: ${({ theme }) => theme.fontSize.s};
    line-height: normal;
  }
`;
const Label = styled.label`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-bottom: 0.5rem;
  margin-top: 1rem;
  @media screen and (min-width: 680px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
const Input = styled.input`
  width: 100%;
  min-height: 2.5rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  border: 1px solid white;
  background: none;
  color: ${({ theme }) => theme.colors.primaryLight};
  padding: 0.5rem;
  font-weight: bold;
  &.darkMode {
    color: ${({ theme }) => theme.colors.primaryDark};
    border: 1px solid #2d2d2d;
  }
  @media screen and (min-width: 680px) {
    min-height: 3.5rem;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.primaryLight};
  border: 1px solid white;
  background: none;
  font-family: 'Montserrat';
  font-weight: bold;
  padding: 0.5rem;
  &.darkMode {
    color: ${({ theme }) => theme.colors.primaryDark};
    border: 1px solid #2d2d2d;
  }
  @media screen and (min-width: 680px) {
    height: 20rem;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
const StyledButton = styled(Button)`
  width: 30%;
  margin-top: 1rem;
`;
const InfoIcon = styled.img`
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  right: 0;
  bottom: 0;
  z-index: 100;
  cursor: pointer;
`;

export default Cart;
