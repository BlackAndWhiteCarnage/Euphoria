import React from 'react';
import Square from 'assets/icons/Square.svg';
import darkSquare from 'assets/icons/DarkSquare.svg';
import styled from 'styled-components';
import {
  Wrapper,
  ProductsWrapper,
  ProductWrapper,
  ProductName,
  ProductImg,
  ProductImgWrapper,
  Product,
  ButtonsWrapper,
  SquareTopRight,
  SquareBottomLeft,
  StyledLink,
  ImageLink,
} from './Shop.styles';
import Button from 'components/Button/Button';

const StyledButton = styled(Button)`
  margin-bottom: 1rem;
`;

const Shop = ({ darkMode, data, setItem, getURL }) => {
  return (
    <Wrapper className={darkMode && 'darkMode'}>
      <ProductsWrapper>
        {data &&
          data.map((item) => (
            <ProductWrapper className={darkMode && 'darkMode'} key={item.id}>
              <Product>
                <ImageLink to={`/${getURL()}/${item.id}`} onClick={() => setItem(item)}>
                  <ProductImgWrapper>
                    <ProductImg src={item.mainImages[0]} />
                  </ProductImgWrapper>
                </ImageLink>
                <ProductName className={darkMode && 'darkMode'}>{item.name}</ProductName>
                <ButtonsWrapper>
                  <StyledButton className={darkMode && 'darkMode'} text={'dodaj do koszyka'} />
                  <StyledLink to={`/${getURL()}/${item.id}`} onClick={() => setItem(item)}>
                    <Button className={darkMode && 'darkMode'} text={'sprawdź'} />
                  </StyledLink>
                </ButtonsWrapper>
              </Product>
              <SquareTopRight src={darkMode ? darkSquare : Square} />
              <SquareBottomLeft src={darkMode ? darkSquare : Square} />
            </ProductWrapper>
          ))}
      </ProductsWrapper>
    </Wrapper>
  );
};

export default Shop;
