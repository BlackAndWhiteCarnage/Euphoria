import styled from 'styled-components';
import Button from 'components/Button/Button';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
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

export const Form = styled.form`
  position: relative;
  width: 90%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;
  h4 {
    color: ${({ theme }) => theme.colors.primaryRed};
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
  @media screen and (min-width: 680px) {
    height: 20rem;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
export const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 2.5rem;
`;
export const MediaButton = styled(Button)`
  width: 100%;
  margin-top: 5rem;
`;
export const InfoIcon = styled.img`
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  left: 50%;
  bottom: -8rem;
  transform: translate(-50%);
  cursor: pointer;
  z-index: 2;
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
