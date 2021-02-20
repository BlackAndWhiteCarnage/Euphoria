import React from 'react';
import {
  Wrapper,
  ButtonWrapper,
  SectionContentWrapper,
  SectionHeader,
  SectionContent,
} from './WhyMe.styles';

const WhyMe = () => {
  return (
    <Wrapper>
      <ButtonWrapper>
        <SectionContentWrapper>
          <SectionHeader>DLACZEGO U MNIE?</SectionHeader>
          <SectionContent>
            Zacznę od tego że do każdego klienta podchodzę indywidualnie.
            Kupując majteczki lub inny produkt masz gwarancję dyskrecji oraz
            tego że pozostaniesz anonimowy a ja będę mogła zaangażować się w
            Twoje zamówienie. Ba! Składając je, nie musisz nawet podawać
            imienia. Zamówienia zawsze są zapakowane starannie w pudełeczko oraz
            owinięte papierem prezentowym ze wstążeczką a do tego całość zawsze
            akcentuje zapachem moich ulubionych perfum. Same majteczki także są
            wysokich lotów bo większość z nich jest bawełniana a co za tym idzie
            lepiej chłoną mój zapach i dłużej go utrzymują. Ponadto każda sztuka
            pakowana jest w woreczek strunowy. A tak o sobie samej powiem że mam
            20 lat więc jestem młodziutka, seksowna i cholernie zboczona. O
            więcej szczegółów będziesz musiał spytać sam.
          </SectionContent>
        </SectionContentWrapper>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default WhyMe;
