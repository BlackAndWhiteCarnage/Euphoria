import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  color: ${({ theme }) => theme.colors.primaryLight};
  background: ${({ theme }) => theme.colors.primaryRed};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  @media screen and (max-width: 1200px) {
    display: none;
  }
  @media screen and (min-width: 1500px) {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 6%;
  }
`;

export const NavItem = styled.li``;
