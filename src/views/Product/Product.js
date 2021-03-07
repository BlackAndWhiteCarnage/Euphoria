import React, { useState } from 'react';
import styled from 'styled-components';
import {
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
  BackIcon,
  BigProductImageWrapper,
  BigProductImage,
  AllExtras,
  ExtrasItem,
} from './Product.styles';
import Back from 'assets/icons/Back.svg';
import DarkBack from 'assets/icons/DarkBack.svg';
import Button from 'components/Button/Button';

const Product = ({ item, darkMode, previousPathHandler, cart, setCart }) => {
  const [bigImage, setBigImage] = useState(false);
  const [bigProductImage, setBigProductImage] = useState(false);
  const [showExtras, setShowExtras] = useState(false);

  const setBigImageHandler = () => {
    setBigImage(!bigImage);
  };

  const addToCartHandler = (item) => {
    cart.push(item);
    setCart([...cart]);
  };

  return (
    <Wrapper className={darkMode && 'darkMode'}>
      {bigProductImage && (
        <BigProductImageWrapper onClick={() => setBigProductImage(!bigProductImage)}>
          <BigProductImage src={item.productImage} />
        </BigProductImageWrapper>
      )}
      <ProductWrapper>
        <BackIcon src={darkMode ? DarkBack : Back} onClick={previousPathHandler} />
        <ProductNameDesktop>{item.name}</ProductNameDesktop>
        <ButtonsWrapperDesktop>
          <StyledButton className={darkMode && 'darkMode'} text={'dodatki'} onClick={() => setShowExtras(!showExtras)} />
          <StyledButton className={darkMode && 'darkMode'} text={'zdjęcie poglądowe'} onClick={() => setBigProductImage(!bigProductImage)} />
          <StyledButton className={darkMode && 'darkMode'} text={'dodaj do koszyka'} onClick={() => addToCartHandler(item)} />
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
          <ImageAndDescWrapper className={bigImage && 'bigImage'}>
            <ProductImage src={item.mainImages[0]} onClick={setBigImageHandler} className={bigImage && 'bigImage'} />
            <ProductImage src={item.mainImages[1]} className={`${!bigImage && 'media'} ${bigImage && 'bigImage'}`} onClick={setBigImageHandler} />
            <Description className={bigImage && 'bigImage'}>
              Liczy się dla mnie zadowolenie moich klientów majteczki będą noszone dzień przed wysyłką, aby pozostały świeże i pachnące zostaną
              zapakowane w woreczek strunowy. Uprzedzam iż czas wysyłki niestety może się troszeczkę wydłużyć. Kolejność noszenia majteczek ustalana
              jest adekwatnie do osób które zapłaciły pierwsze. Jeśli jesteś ciekaw, spytaj poprzez formularz kontaktowy o terminy wysyłek.
              <ExtrasInfoDesktop>Kupując majciochy masz do wyboru dwa bonusy, sprawdź poniżej jakie!</ExtrasInfoDesktop>
              {showExtras && (
                <AllExtras onClick={() => setShowExtras(!showExtras)} className={darkMode && 'darkMode'}>
                  <ExtrasItem>noszenie dwa dni</ExtrasItem>
                  <ExtrasItem>piss na majteczki</ExtrasItem>
                  <ExtrasItem>scat w majteczkach</ExtrasItem>
                  <ExtrasItem>orgazm</ExtrasItem>
                  <ExtrasItem>zapach moich ulubionych perfum</ExtrasItem>
                  <ExtrasItem>5 sexy zdjęć w tych majciochach</ExtrasItem>
                  <ExtrasItem>krótkie nagranie z noszenia (ok. 20/30 sekund)</ExtrasItem>
                  <ExtrasItem>naplucie na majteczki</ExtrasItem>
                  <ExtrasItem>majteczki z ciasnej dziórki</ExtrasItem>
                  <ExtrasItem>uprawianie sportu</ExtrasItem>
                  <ExtrasItem>menstruacja</ExtrasItem>
                </AllExtras>
              )}
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
            <StyledButton className={darkMode && 'darkMode'} text={'dodatki'} onClick={() => setShowExtras(!showExtras)} />
            <StyledButton className={darkMode && 'darkMode'} text={'zdjęcie poglądowe'} onClick={() => setBigProductImage(!bigProductImage)} />
            <StyledButton className={darkMode && 'darkMode'} text={'dodaj do koszyka'} />
          </ButtonsWrapper>
        </ProductWrapper2>
      </ProductWrapper>
    </Wrapper>
  );
};

const StyledButton = styled(Button)`
  margin: 0 0.5rem 0.5rem 0;
`;

export default Product;
