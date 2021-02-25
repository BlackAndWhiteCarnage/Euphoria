import React, { useState, useEffect } from 'react';
import Square from 'assets/icons/Square.svg';
import darkSquare from 'assets/icons/DarkSquare.svg';
import {
  Wrapper,
  ProductsWrapper,
  ProductWrapper,
  ProductName,
  ProductImg,
  Product,
  ButtonsWrapper,
  Button,
  SquareTopLeft,
  SquareTopRight,
  SquareBottomLeft,
  SquareBottomRight,
} from './Shop.styles';
import { panties } from 'data/Panties';
import { socks } from 'data/Socks';
import { tights } from 'data/TightsAndStockings';

const Shop = ({ darkMode, URL, setURL }) => {
  const [data, setData] = useState([]);
  console.log(URL);
  useEffect(() => {
    setData(URL === 'majteczki' ? panties : URL === 'skarpetki' ? socks : URL === 'rajstopy' && tights);
  }, [URL]);

  return (
    <Wrapper className={darkMode && 'darkMode'}>
      <ProductsWrapper>
        {data.map((item) => {
          console.log(item);
          return (
            <ProductWrapper>
              <Product>
                <ProductImg src={item.mainImages[0]} />
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

export default Shop;
