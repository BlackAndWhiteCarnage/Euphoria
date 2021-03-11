import styled from 'styled-components';
import Button from 'components/Button/Button';

export const Wrapper = styled.div`
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
    background: linear-gradient(#d3d3d3, #ececec, #f3f3f3);
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
  @media screen and (min-width: 680px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 70%;
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
    top: 1.5rem;
  }
`;
export const Header = styled.h4`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-top: 2rem;
  @media screen and (min-width: 680px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;
export const ParamsWrapper = styled.div`
  display: flex;
  align-items: center;
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
    width: 95%;
    span {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
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
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-top: 1rem;
  border-radius: 1rem;
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
    width: 95%;
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
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 680px) {
    width: 45%;
    height: 100%;
  }
`;
export const Form = styled.form`
  position: relative;
  width: 100%;
  height: 55%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
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
  background: rgba(0, 0, 0, 0.7);
  color: ${({ theme }) => theme.colors.primaryLight};
  z-index: 10;
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
    background: rgba(255, 255, 255, 0.7);
  }
  &.showInfo {
    pointer-events: all;
    opacity: 1;
    width: 120%;
    height: 120%;
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
`;
export const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.primaryLight};
  border: 1px solid white;
  background: none;
  font-family: 'Montserrat';
  font-weight: bold;
  padding: 0.5rem;
  resize: none;
  border-radius: 1rem;
  &.darkMode {
    color: ${({ theme }) => theme.colors.primaryDark};
    border: 1px solid #2d2d2d;
  }
  @media screen and (min-width: 680px) {
    height: 20rem;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
export const StyledButton = styled(Button)`
  width: 50%;
  margin-top: 1rem;
`;
export const InfoIcon = styled.img`
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  right: 0;
  bottom: 0;
  z-index: 100;
  cursor: pointer;
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
  width: 90%;
  height: 90%;
  object-fit: cover;
  @media screen and (min-width: 680px) {
    width: auto;
    height: 80%;
  }
`;
export const ImageWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 900;
  background: rgba(0, 0, 0, 0.8);
`;
