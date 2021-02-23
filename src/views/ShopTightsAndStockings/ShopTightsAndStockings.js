import React from 'react';
import Square from 'assets/icons/Square.svg';
import darkSquare from 'assets/icons/DarkSquare.svg';
import {
  Wrapper,
  ProductsWrapper,
  ProductWrapper,
  Product,
  ProductImg,
  ProductName,
  ButtonsWrapper,
  Button,
  SquareTopLeft,
  SquareTopRight,
  SquareBottomLeft,
  SquareBottomRight,
} from './ShopTightsAndStockings.styles';
import { tights } from 'data/TightsAndStockings';

const ShopTightsAndStockings = ({ darkMode }) => {
  return (
    <Wrapper className={darkMode && 'darkMode'}>
      <ProductsWrapper>
        {tights.map((item) => (
          <ProductWrapper>
            <Product>
              <ProductImg src={item.mainImages[1]} />
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
        ))}
      </ProductsWrapper>
    </Wrapper>
  );
};

export default ShopTightsAndStockings;
