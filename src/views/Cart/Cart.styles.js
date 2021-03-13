import styled from 'styled-components';
import Button from 'components/Button/Button';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primaryLight};
  font-family: 'Montserrat';
  overflow: hidden;
  background: linear-gradient(#1d1d1d, #000000, #505050);
  &.darkMode {
    color: ${({ theme }) => theme.colors.primaryDark};
    background: linear-gradient(0deg, rgba(194, 194, 194, 1) 0%, rgba(255, 255, 255, 1) 36%, rgba(255, 255, 255, 1) 63%, rgba(189, 189, 189, 1) 100%);
  }
  @media screen and (min-width: 680px) {
    align-items: center;
  }
`;
export const CartWrapper = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 680px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    height: 60%;
  }
`;
export const BackIcon = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 2.5rem;
  height: 2.5rem;
  z-index: 800;
  cursor: pointer;
  &:hover {
    transform: scale(1.4) rotate(-360deg);
    transition: 0.5s ease;
  }
  @media screen and (max-width: 680px) {
    top: 1rem;
  }
`;
export const Header = styled.h4`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-bottom: 2.5rem;
  @media screen and (min-width: 680px) {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;
export const ParamsWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: 10%;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  span {
    color: ${({ theme }) => theme.colors.primaryRed};
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media screen and (min-width: 680px) {
    font-size: ${({ theme }) => theme.fontSize.m};
    width: 100%;
    span {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }
  @media screen and (max-height: 580px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const Items = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 65%;
  overflow-y: scroll;
  @media screen and (min-width: 680px) {
    height: 70%;
  }
`;
export const Item = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 3rem;
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-top: 2.5rem;
  border-radius: 1rem;
  padding-right: 1rem;
  cursor: pointer;
  p {
    width: 100%;
  }
  &:last-child {
    border: none;
  }
  &.darkMode {
    :hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
  @media screen and (min-width: 680px) {
    font-size: ${({ theme }) => theme.fontSize.m};
    min-height: 8rem;
    width: 100%;
    /* border: 1px solid #b80202; */
    transition: 0.5s ease;
    :hover {
      transition: 0.5s ease;
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;
export const Price = styled.p`
  font-weight: bold;
  text-align: center;
  span {
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.primaryRed};
  }
`;
export const ItemsWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 2.5rem 0;
  @media screen and (min-width: 680px) {
    width: 45%;
    height: 100%;
    margin: 0;
  }
`;
export const Form = styled.form`
  position: relative;
  width: 100%;
  height: 55%;
  display: flex;
  flex-direction: column;
  h4 {
    color: ${({ theme }) => theme.colors.primaryRed};
  }
  @media screen and (min-width: 680px) {
    width: 45%;
    height: 100%;
    justify-content: space-between;
  }
`;
export const InfoWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.9);
  color: ${({ theme }) => theme.colors.primaryLight};
  z-index: 1;
  border-radius: 20px;
  width: 0%;
  height: 0%;
  transition: 1s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  opacity: 0;
  pointer-events: none;
  overflow: hidden;
  cursor: pointer;
  &.darkMode {
    color: ${({ theme }) => theme.colors.primaryDark};
    background: rgba(255, 255, 255, 0.9);
  }
  &.showInfo {
    pointer-events: all;
    opacity: 1;
    width: 120%;
    height: 120%;
    z-index: 800;
    transition: 1s ease;
    @media screen and (max-width: 680px) {
      width: 110%;
      height: 105%;
    }
  }
`;
export const InfoText = styled.p`
  opacity: 0;
  width: 80%;
  height: auto;
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 2rem;
  font-weight: bold;
  transition: 3s ease;
  &.showInfo {
    transition: 3s ease;
    opacity: 1;
  }
  @media screen and (max-width: 680px) {
    font-size: ${({ theme }) => theme.fontSize.s};
    line-height: normal;
  }
`;
export const Label = styled.label`
  width: 100%;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 1rem 0;
  @media screen and (min-width: 680px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
export const Input = styled.input`
  width: 100%;
  min-height: 3rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  border: 1px solid white;
  background: none;
  color: ${({ theme }) => theme.colors.primaryLight};
  padding: 0.5rem;
  transition: 0.5s ease;
  font-weight: bold;
  border-radius: 1rem;
  &.darkMode {
    color: ${({ theme }) => theme.colors.primaryDark};
    border: 1px solid #2d2d2d;
  }
  @media screen and (min-width: 680px) {
    min-height: 3.5rem;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media screen and (max-width: 680px) {
    &:focus {
      height: 4rem;
      position: fixed;
      top: 10%;
      width: 90%;
      z-index: 99999;
      background: black;
    }
  }
`;
export const TextArea = styled.textarea`
  width: 100%;
  min-height: 10rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.primaryLight};
  border: 1px solid white;
  background: none;
  font-family: 'Montserrat';
  font-weight: bold;
  padding: 0.5rem;
  resize: none;
  border-radius: 1rem;
  transition: 0.5s ease;
  &.darkMode {
    color: ${({ theme }) => theme.colors.primaryDark};
    border: 1px solid #2d2d2d;
  }
  @media screen and (max-width: 680px) {
    &:focus {
      position: fixed;
      top: 10%;
      width: 90%;
      z-index: 99999;
      background: black;
    }
  }
  @media screen and (min-width: 680px) {
    height: 20rem;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
export const StyledButton = styled(Button)`
  width: 80%;
  @media screen and (min-width: 680px) {
    width: 50%;
  }
`;
export const StyledLink = styled(Link)`
  width: 100%;
  text-decoration: none;
`;
export const MediaButton = styled(Button)`
  width: 100%;
  margin-top: 5rem;
`;
export const InfoIcon = styled.img`
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  right: 0;
  bottom: 0;
  cursor: pointer;
  z-index: 2;
  animation: Pulse 2s ease infinite;
  border-radius: 50%;
  @keyframes Pulse {
    0% {
      transform: scale(1.3);
    }
    50% {
      transform: scale(1);
      box-shadow: 0px 0px 15px 5px #b80202;
    }
    100% {
      transform: scale(1.3);
    }
  }
`;
export const DeleteIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

export const ImagePreviewIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 2.5rem;
`;
export const Image = styled.img`
  width: 80%;
  height: 60%;
  object-fit: cover;
  border-radius: 2rem;
  @media screen and (min-width: 680px) {
    width: auto;
    height: 60%;
  }
`;
export const ImageWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 900;
  background: rgba(0, 0, 0, 0.8);
`;
