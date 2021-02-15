import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Wrapper>
      <Form>
        <Label>Adres e-mail</Label>
        <Input />
        <Label>Treść wiadomości</Label>
        <TextArea />
      </Form>
      <Button>WYŚLIJ</Button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.primaryRed};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Form = styled.form`
  width: 60%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Label = styled.label`
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fontSize.m};
  width: 100%;
  margin: 2rem;
`;
const Input = styled.input`
  width: 100%;
  height: 3rem;
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 16rem;
`;
const Button = styled.button`
  margin-top: 2.5rem;
  width: 60%;
  height: 5rem;
  border: none;
  color: ${({ theme }) => theme.colors.primaryLight};
  background: ${({ theme }) => theme.colors.primaryDark};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-family: 'Montserrat', sans-serif;
`;

export default Contact;
