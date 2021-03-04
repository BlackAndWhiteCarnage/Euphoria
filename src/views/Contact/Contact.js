import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  Wrapper,
  SectionHeader,
  Form,
  Label,
  Input,
  TextArea,
  InfoAndButton,
  Info,
  // Button,
  SocialMediaWrapper,
  SocialMediaInfo,
  SocialMediaIconsWrapper,
  Icon,
} from './Contact.styles';
import Instagram from 'assets/icons/Instagram.svg';
import DarkInstagram from 'assets/icons/DarkInstagram.svg';
import Email from 'assets/icons/Email.svg';
import DarkEmail from 'assets/icons/DarkEmail.svg';
import WhatsApp from 'assets/icons/WhatsApp.svg';
import DarkWhatsApp from 'assets/icons/DarkWhatsApp.svg';
import Button from 'components/Button/Button';

const Contact = ({ darkMode, setSlide }) => {
  const [element, view] = useInView({ threshold: 1 });

  useEffect(() => {
    if (view) {
      setSlide(3);
    }
  }, [view]);

  return (
    <Wrapper ref={element}>
      <SectionHeader className={darkMode && 'darkMode'}>KONTAKT</SectionHeader>
      <Form className={darkMode && 'darkMode'}>
        <Label htmlFor="Email">Adres E-Mail</Label>
        <Input id="Email" className={darkMode && 'darkMode'} />
        <Label htmlFor="Message">Wiadomość</Label>
        <TextArea id="Message" className={darkMode && 'darkMode'} />
        <InfoAndButton>
          <Info className={darkMode && 'darkMode'}>Informacje podane w polach służą jedynie do kontaktu z potencjalnym klientem</Info>
          <Button className={darkMode && 'darkMode'} text={'wyślij'} />
        </InfoAndButton>
      </Form>
      <SocialMediaWrapper>
        <SocialMediaInfo className={darkMode && 'darkMode'}>Lub skontatkuj się ze mną poprzez social media</SocialMediaInfo>
        <SocialMediaIconsWrapper>
          <Icon src={darkMode ? DarkInstagram : Instagram} alt="Instagram Icon" />
          <Icon src={darkMode ? DarkEmail : Email} alt="Email Icon" />
          <Icon src={darkMode ? DarkWhatsApp : WhatsApp} alt="What's App Icon" />
        </SocialMediaIconsWrapper>
      </SocialMediaWrapper>
    </Wrapper>
  );
};

export default Contact;
