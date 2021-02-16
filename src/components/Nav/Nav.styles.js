import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: none;
  @media screen and (min-width: 1200px) {
    /* -webkit-box-shadow: inset 10px 0px 20px -10px #000000;
    box-shadow: inset 10px 0px 20px -10px #000000; */
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    color: ${({ theme }) => theme.colors.primaryLight};
    background: #252525;
    font-size: ${({ theme }) => theme.fontSize.m};
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 14rem;
  }
`;

export const NavItem = styled.li`
  transition: 0.5s ease;
  padding: 2rem;
  cursor: pointer;
  &:hover {
    letter-spacing: 0.2rem;
    transition: 0.5s ease;
  }
`;
