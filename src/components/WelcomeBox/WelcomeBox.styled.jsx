import styled from 'styled-components';
import { Bubble2, Bubble3 } from '../MainAppContainer/MainAppContainer.styled';

export const WelcomeWrapper = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    padding: 0 64px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 100px;
  }
`;

export const BubbleWelcome1 = styled(Bubble3)`
  background-color: #4070cd50;
  @media screen and (min-width: 768px) {
    top: -50px;
    left: -665px;
  }

  @media screen and (min-width: 1440px) {
    top: -231px;
    left: -494px;
  }
`;
export const BubbleWelcome2 = styled(Bubble3)`
  background-color: #bce6d240;
  filter: blur(89.71px);
  z-index: 2;
  width: 257px;
  height: 247px;
  top: 84px;
  left: 42px;

  @media screen and (min-width: 768px) {
    background-color: #bce6d230;
    width: 387px;
    height: 372px;
    top: 46px;
    left: 0;
  }

  @media screen and (min-width: 1440px) {
    background-color: #bce6d240;
    height: 381px;
    top: -132px;
    left: 171px;
  }
`;
export const BubbleWelcome3 = styled(Bubble2)`
  display: block;
`;
