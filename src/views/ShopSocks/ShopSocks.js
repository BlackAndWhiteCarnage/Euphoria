import React, { useState, useEffect } from 'react';
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
} from './ShopSocks.styles';

const ShopSocks = ({ darkMode }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await fetch('http://localhost:4000/categories/2')
      .then((response) => response.json())
      .then((res) => setData(res.products));
  };

  return (
    <Wrapper className={darkMode && 'darkMode'}>
      <ProductsWrapper>
        {data.map((item) => {
          return (
            <ProductWrapper>
              <Product>
                <ProductImg src={`http://localhost:4000${item.image[0].url}`} />
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
          );
        })}
      </ProductsWrapper>
    </Wrapper>
  );
};

export default ShopSocks;
