import React, { useState, useEffect, useRef } from 'react';
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
  SquareTopLeft,
  SquareTopRight,
  SquareBottomLeft,
  SquareBottomRight,
  NotSelectedInfo,
} from './Shop.styles';
import { panties } from 'data/Panties';
import { socks } from 'data/Socks';
import { tights } from 'data/TightsAndStockings';

const Shop = ({ darkMode, URL, data }) => {
  const container = useRef(null);

  return (
    <Wrapper className={darkMode && 'darkMode'}>
      <ProductsWrapper ref={container}>
        {data ? (
          data.map((item) => (
            <ProductWrapper>
              <Product>
                <ProductImgWrapper>
                  <ProductImg src={item.mainImages[0]} />
                </ProductImgWrapper>
                <ProductName className={darkMode && 'darkMode'}>{item.name}</ProductName>
                <ButtonsWrapper>
                  <Button className={darkMode && 'darkMode'}>Dodaj do koszyka</Button>
                  <Button className={darkMode && 'darkMode'}>Przejdź</Button>
                </ButtonsWrapper>
              </Product>
              <SquareTopLeft src={darkMode ? darkSquare : Square} />
              <SquareTopRight src={darkMode ? darkSquare : Square} />
              <SquareBottomLeft src={darkMode ? darkSquare : Square} />
              <SquareBottomRight src={darkMode ? darkSquare : Square} />
            </ProductWrapper>
          ))
        ) : (
          <NotSelectedInfo className={darkMode && 'darkMode'}>Hej, wybierz interesującą Cię kategorię :D</NotSelectedInfo>
        )}
      </ProductsWrapper>
    </Wrapper>
  );
};

export default Shop;
