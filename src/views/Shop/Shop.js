import React, { useState, useEffect } from 'react';
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
  StyledLink,
  ImageLink,
  StyledButton,
} from './Shop.styles';
import Button from 'components/Button/Button';

const Shop = ({ darkMode, data, setItem, getURL, setCart, cart }) => {
  const addToCartHandler = React.useCallback((item) => {
    cart.push(item);
    setCart([...cart]);
  });

  return (
    <Wrapper className={darkMode && 'darkMode'}>
      <ProductsWrapper>
        {data &&
          data.map((item) => (
            <ProductWrapper className={darkMode && 'darkMode'} key={item.id} to={`/${getURL()}/${item.id}`} onClick={() => setItem(item)}>
              <Product>
                <ImageLink to={`/${getURL()}/${item.id}`} onClick={() => setItem(item)}>
                  <ProductImgWrapper>
                    <ProductImg src={item.mainImages[0]} />
                  </ProductImgWrapper>
                </ImageLink>
                <ProductName className={darkMode && 'darkMode'}>{item.name}</ProductName>
              </Product>
            </ProductWrapper>
          ))}
      </ProductsWrapper>
    </Wrapper>
  );
};

export default Shop;
