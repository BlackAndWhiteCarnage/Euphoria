import React from 'react';
import {
  Wrapper,
  SectionHeader,
  Form,
  Label,
  Input,
  TextArea,
  InfoAndButton,
  Info,
  Button,
  SocialMediaWrapper,
  SocialMediaInfo,
  SocialMediaIconsWrapper,
  Icon,
} from './Contact.styles';
import Instagram from 'assets/icons/Instagram.svg';
import Email from 'assets/icons/Email.svg';
import WhatsApp from 'assets/icons/WhatsApp.svg';

const Contact = () => {
  return (
    <Wrapper>
      <SectionHeader>KONTAKT</SectionHeader>
      <Form>
        <Label>Adres E-Mail</Label>
        <Input />
        <Label>Wiadomość</Label>
        <TextArea />
        <InfoAndButton>
          <Info>
            Informacje podane w polach służą jedynie do kontaktu z potencjalnym
            klientem
          </Info>
          <Button>Wyślij</Button>
        </InfoAndButton>
      </Form>
      <SocialMediaWrapper>
        <SocialMediaInfo>
          Lub skontatkuj się ze mną poprzez social media
        </SocialMediaInfo>
        <SocialMediaIconsWrapper>
          <Icon src={Instagram} />
          <Icon src={Email} />
          <Icon src={WhatsApp} />
        </SocialMediaIconsWrapper>
      </SocialMediaWrapper>
    </Wrapper>
  );
};

export default Contact;
