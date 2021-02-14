import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: none;
  @media screen and (min-width: 1200px) {
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
    width: 12rem;
  }
`;

export const NavItem = styled.li``;
