import React from 'react';
import styled from 'styled-components';

const ShopItem = ({ path, key, info, item }) => {
  return <Wrapper>{item && <h1>{item.id}</h1>}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
`;

const H = styled.h1`
  font-size: 10rem;
  z-index: 2000;
`;

export default ShopItem;
