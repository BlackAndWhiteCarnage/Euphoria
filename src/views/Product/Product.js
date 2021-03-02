import React from 'react';
import {
  Button,
  ButtonsWrapper,
  Cost,
  CostAndInfoWrapper,
  ProductWrapper1,
  ProductWrapper2,
  ExtrasInfo,
  ExtrasInfoDesktop,
  ProductImage,
  Description,
  CostsInfoWrapper,
  ButtonsWrapperDesktop,
  CostsInfoWrapperDesktop,
  ProductName,
  ImageAndDescWrapper,
  Wrapper,
  ProductWrapper,
  ProductNameDesktop,
} from './Product.styles';
const Product = ({ item, darkMode }) => {
  return (
    <Wrapper className={darkMode && 'darkMode'}>
      <ProductWrapper>
        <ProductNameDesktop>{item.name}</ProductNameDesktop>
        <ButtonsWrapperDesktop>
          <Button className={darkMode && 'darkMode'}>Dodatki</Button>
          <Button className={darkMode && 'darkMode'}>Zdjęcie Poglądowe</Button>
          <Button className={darkMode && 'darkMode'}>Dodaj do koszyka</Button>
        </ButtonsWrapperDesktop>
        <CostsInfoWrapperDesktop>
          <Cost>
            Cena: <span>{item.cost}</span> zł
          </Cost>
          <Cost>
            Przesyłka: <span>{item.shipping}</span> zł
          </Cost>
          <Cost>
            Razem: <span>{item.cost + item.shipping}</span> zł
          </Cost>
        </CostsInfoWrapperDesktop>
        <ProductWrapper1>
          <ProductName>{item.name}</ProductName>
          <ImageAndDescWrapper>
            <ProductImage src={item.mainImages[0]} />
            <ProductImage src={item.mainImages[1]} className="media" />
            <Description>
              Liczy się dla mnie zadowolenie moich klientów majteczki będą noszone dzień przed wysyłką, aby pozostały świeże i pachnące zostaną
              zapakowane w woreczek strunowy. Uprzedzam iż czas wysyłki niestety może się troszeczkę wydłużyć. Kolejność noszenia majteczek ustalana
              jest adekwatnie do osób które zapłaciły pierwsze. Jeśli jesteś ciekaw, spytaj poprzez formularz kontaktowy o terminy wysyłek.
              <ExtrasInfoDesktop>Kupując majciochy masz do wyboru dwa bonusy, sprawdź poniżej jakie!</ExtrasInfoDesktop>
            </Description>
          </ImageAndDescWrapper>
        </ProductWrapper1>
        <ProductWrapper2>
          <CostAndInfoWrapper>
            <ExtrasInfo>Kupując majciochy masz do wyboru dwa bonusy, sprawdź poniżej jakie!</ExtrasInfo>
            <CostsInfoWrapper>
              <Cost>
                Cena: <span>{item.cost}</span> zł
              </Cost>
              <Cost>
                Przesyłka: <span>{item.shipping}</span> zł
              </Cost>
              <Cost>
                Razem: <span>{item.cost + item.shipping}</span> zł
              </Cost>
            </CostsInfoWrapper>
          </CostAndInfoWrapper>
          <ButtonsWrapper>
            <Button className={darkMode && 'darkMode'}>Dodatki</Button>
            <Button className={darkMode && 'darkMode'}>Zdjęcie Poglądowe</Button>
            <Button className={darkMode && 'darkMode'}>Dodaj do koszyka</Button>
          </ButtonsWrapper>
        </ProductWrapper2>
      </ProductWrapper>
    </Wrapper>
  );
};

export default Product;
