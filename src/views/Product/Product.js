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
import Button from 'components/Button/Button';
import { pageAnimation } from 'components/Animations/Animations';

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
    <Wrapper className={darkMode && 'darkMode'} exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      {bigProductImage && (
        <BigProductImageWrapper onClick={() => setBigProductImage(!bigProductImage)}>
          <BigProductImage src={item.productImage} />
        </BigProductImageWrapper>
      )}
      {showExtras && (
        <AllExtras onClick={() => setShowExtras(!showExtras)} className={darkMode && 'darkMode'}>
          {item.extras.map((extrasItem) => (
            <ExtrasItem className={darkMode && 'darkMode'}>{extrasItem}</ExtrasItem>
          ))}
        </AllExtras>
      )}
      <ProductWrapper>
        <ProductNameDesktop>{item.name}</ProductNameDesktop>
        <ButtonsWrapperDesktop>
          {item.extras && <StyledButton className={darkMode && 'darkMode'} text={'dodatki'} onClick={() => setShowExtras(!showExtras)} />}
          {item.productImage && (
            <StyledButton className={darkMode && 'darkMode'} text={'zdjęcie poglądowe'} onClick={() => setBigProductImage(!bigProductImage)} />
          )}
          <StyledButton
            className={darkMode && 'darkMode'}
            text={'dodaj do koszyka'}
            cart={cart}
            itemID={item.id}
            onClick={() => addToCartHandler(item)}
          />
        </ButtonsWrapperDesktop>
        <CostsInfoWrapperDesktop>
          <Cost>
            Cena: <span>{item.cost}</span> zł
          </Cost>
          <Cost>
            Przesyłka: <span>darmowa</span>
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
              <ExtrasInfoDesktop>Kupując majciochy masz do wyboru dwa dodatki, sprawdź koniecznie jakie!</ExtrasInfoDesktop>
            </Description>
          </ImageAndDescWrapper>
        </ProductWrapper1>
        <ProductWrapper2>
          <CostAndInfoWrapper>
            <ExtrasInfo>Kupując majciochy masz do wyboru dwa dodatki, sprawdź koniecznie jakie!</ExtrasInfo>
            <CostsInfoWrapper>
              <Cost>
                Cena: <span>{item.cost}</span> zł
              </Cost>
              <Cost>
                Przesyłka: <span>darmowa</span>
              </Cost>
            </CostsInfoWrapper>
          </CostAndInfoWrapper>
          <ButtonsWrapper>
            {item.extras && <StyledButton className={darkMode && 'darkMode'} text={'dodatki'} onClick={() => setShowExtras(!showExtras)} />}
            {item.productImage && (
              <StyledButton className={darkMode && 'darkMode'} text={'zdjęcie poglądowe'} onClick={() => setBigProductImage(!bigProductImage)} />
            )}
            <StyledButton
              className={darkMode && 'darkMode'}
              text={'dodaj do koszyka'}
              cart={cart}
              itemID={item.id}
              onClick={() => addToCartHandler(item)}
            />
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
