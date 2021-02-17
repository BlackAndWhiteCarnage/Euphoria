import React from 'react';
import {
  Wrapper,
  SectionTitle,
  Info,
  InfoContent,
  ImageWrapper,
  Image,
} from './WhyMe.styles';
import WhyMeIcon from 'assets/icons/WhyMe.svg';
import Image2 from 'assets/images/Image2.jpg';

const WhyMe = () => {
  return (
    <Wrapper>
      <Info>
        <SectionTitle src={WhyMeIcon} />
        <InfoContent>
          Zacznę od tego że do każdego klienta podchodzę indywidualnie. Kupując
          majteczki lub inny produkt masz gwarancję dyskrecji oraz tego że
          pozostaniesz anonimowy a ja będę mogła zaangażować się w Twoje
          zamówienie. Ba! Składając je, nie musisz nawet podawać imienia.
          Zamówienia zawsze są zapakowane starannie w pudełeczko oraz owinięte
          papierem prezentowym ze wstążeczką a do tego całość zawsze akcentuje
          zapachem moich ulubionych perfum. Same majteczki także są wysokich
          lotów bo większość z nich jest bawełniana a co za tym idzie lepiej
          chłoną mój zapach i dłużej go utrzymują. Ponadto każda sztuka pakowana
          jest w woreczek strunowy. A tak o sobie samej powiem że mam 20 lat
          więc jestem młodziutka, seksowna i cholernie zboczona. O więcej
          szczegółów będziesz musiał spytać sam.
        </InfoContent>
      </Info>
      <ImageWrapper>
        <Image src={Image2} />
      </ImageWrapper>
    </Wrapper>
  );
};

export default WhyMe;
