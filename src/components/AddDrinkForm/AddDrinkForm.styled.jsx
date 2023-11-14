import styled from '@emotion/styled';
import { getColors } from 'src/utils/getColors';

export const Wrapper = styled.div`
  @media only screen and (min-width: 768px) {
    max-width: 704px;
    @media only screen and (min-width: 1440px) {
      max-width: 833px;
    }
  }
`;

export const Button = styled.button`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 107px;
  height: 46px;

  color: ${({ theme }) => `${getColors(theme).btnTextColor}`};
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  letter-spacing: 0;
  border: 0 solid transparent;
  border-radius: 42px;
  background-color: ${({ theme }) => `${getColors(theme).btnBackground}`};
  @media only screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(18 / 16);
    width: 118px;
    height: 54px;
  }

  &:hover {
    background-color: #161f37;
    background-color: ${({ theme }) => `${getColors(theme).btnTextColor}`};
    color: ${({ theme }) => `${getColors(theme).btnBackground}`};
  }
  &:active {
    color: ${({ theme }) => `${getColors(theme).btnTextColor}`};
    border: 2px solid #4070cd50;
    background-color: ${({ theme }) => `${getColors(theme).btnBackground}`};
  }
  &:disabled {
    color: #f3f3f320;
    background-color: #434d67;
  }
`;
