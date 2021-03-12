import React, { useState } from 'react';
import { Wrapper, Form, Label, Input, TextArea, StyledButton, InfoIcon, InfoWrapper, InfoText } from './BuyingForm.styles';
import Info from 'assets/icons/Info.svg';
import DarkInfo from 'assets/icons/DarkInfo.svg';
import Back from 'assets/icons/Back.svg';
import DarkBack from 'assets/icons/DarkBack.svg';
import Delete from 'assets/icons/Delete.svg';
import DarkDelete from 'assets/icons/DarkDelete.svg';
import ImagePreview from 'assets/icons/ImagePreview.svg';
import DarkImagePreview from 'assets/icons/DarkImagePreview.svg';

const BuyingForm = ({ darkMode }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <Wrapper className={darkMode && 'darkMode'}>
      <Form>
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
    </Wrapper>
  );
};

export default BuyingForm;
