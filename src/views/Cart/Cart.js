import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button/Button';
import Info from 'assets/icons/Info.svg';

const Cart = () => {
  return (
    <Wrapper>
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
              <p>50zł</p>
            </Item>
            <Item>
              <p>Bordowe Śliskie Stringi</p>
              <p>50zł</p>
            </Item>
            <Item>
              <p>Bordowe Śliskie Stringi</p>
              <p>50zł</p>
            </Item>
            <Item>
              <p>Bordowe Śliskie Stringi</p>
              <p>50zł</p>
            </Item>
            <Item>
              <p>Bordowe Śliskie Stringi</p>
              <p>50zł</p>
            </Item>
          </Items>
        </ItemsWrapper>
        <Form>
          <Header>Formularz kontaktowy</Header>
          <Label>Pseudonim</Label>
          <Input />
          <Label>Adres e-mail</Label>
          <Input />
          <Label>Wiadomość</Label>
          <TextArea />
          <StyledButton text={'wyślij'} />
          <InfoIcon src={Info} />
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
`;
const CartWrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
`;
const Header = styled.h4`
  display: flex;
  align-items: center;
  width: 100%;
  height: 15%;
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 1rem 0;
`;
const ParamsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10%;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
`;
const Items = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 65%;
  overflow: scroll;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 3rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-top: 1rem;
`;
const ItemsWrapper = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Form = styled.form`
  position: relative;
  width: 100%;
  height: 65%;
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-bottom: 0.5rem;
  margin-top: 1rem;
`;
const Input = styled.input`
  width: 100%;
  min-height: 2.5rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  border: 1px solid white;
  background: none;
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSize.s};
  border: 1px solid white;
  background: none;
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
`;

export default Cart;
