import React from 'react';
import styled from 'styled-components';
import OpinionsIcon from 'assets/icons/Opinions.svg';

const Opinions = () => {
  return (
    <Wrapper>
      <SectionTitle src={OpinionsIcon} alt="" />
      <OpinionsWrapper>
        <Opinion>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          unde magni. Ab, recusandae cumque qui ratione aspernatur esse porro
          laudantium.
        </Opinion>
        <Opinion>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          unde magni. Ab, recusandae cumque qui ratione aspernatur esse porro
          laudantium.
        </Opinion>
        <Opinion>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo,
          nisi!
        </Opinion>
        <Opinion>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo,
          nisi!
        </Opinion>
        <Opinion>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo,
          nisi!
        </Opinion>
        <Opinion>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum ab
          corrupti nam quia deserunt consequatur!
        </Opinion>
        <Opinion>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum ab
          corrupti nam quia deserunt consequatur!
        </Opinion>
        <Opinion>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum ab
          corrupti nam quia deserunt consequatur!
        </Opinion>
      </OpinionsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

const SectionTitle = styled.img`
  width: 80%;
  margin-bottom: 2.5rem;
  @media screen and (min-width: 480px) {
    width: 60%;
  }
  @media screen and (min-width: 1200px) {
    width: 60%;
    margin: 5rem;
  }
`;

const OpinionsWrapper = styled.ul`
  width: 80%;
  display: flex;
  flex-direction: column;
  height: 60%;
  justify-content: space-around;
  @media screen and (min-width: 1200px) {
    width: 20%;
    height: 80%;
  }
`;

const Opinion = styled.li`
  list-style: none;
  color: #e7e7e7;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  @media screen and (min-width: 480px) {
    font-size: 1.6rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 2rem;
  }
`;

export default Opinions;
