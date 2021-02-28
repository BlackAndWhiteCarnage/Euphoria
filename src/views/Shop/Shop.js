import React, { useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Square from 'assets/icons/Square.svg';
import darkSquare from 'assets/icons/DarkSquare.svg';
import {
  Wrapper,
  ProductsWrapper,
  ProductWrapper,
  ProductName,
  ProductImg,
  ProductImgWrapper,
  Product,
  ButtonsWrapper,
  Button,
  SquareTopRight,
  SquareBottomLeft,
  StyledLink,
} from './Shop.styles';

const Shop = ({ darkMode, data, location, setItem, URL, getURL }) => {
  return (
    <>
      <Wrapper className={darkMode && 'darkMode'}>
        <ProductsWrapper>
          {data &&
            data.map((item) => (
              <ProductWrapper className={darkMode && 'darkMode'} key={item.id}>
                <Product>
                  <ProductImgWrapper>
                    <ProductImg src={item.mainImages[0]} />
                  </ProductImgWrapper>
                  <ProductName className={darkMode && 'darkMode'}>{item.name}</ProductName>
                  <ButtonsWrapper>
                    <Button className={darkMode && 'darkMode'}>Dodaj do koszyka</Button>
                    <StyledLink to={`/${getURL()}/${item.id}`} onClick={() => setItem(item)}>
                      {/* <StyledLink to={'/' + item.id} onClick={() => setItem(item)}> */}
                      <Button className={darkMode && 'darkMode'}>Przejdź</Button>
                    </StyledLink>
                  </ButtonsWrapper>
                </Product>
                <SquareTopRight src={darkMode ? darkSquare : Square} />
                <SquareBottomLeft src={darkMode ? darkSquare : Square} />
              </ProductWrapper>
            ))}
        </ProductsWrapper>
      </Wrapper>
    </>
  );
};

export default Shop;
