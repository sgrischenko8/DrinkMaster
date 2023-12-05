import styled from 'styled-components';
import { colors } from 'src/colors';

export const Container = styled.div`
  position: relative;
  width: 100%;
  // margin: 0 auto;
  padding: 0 20px;

  box-sizing: border-box;
  overflow-y: hidden;
  ${({ theme }) => theme === 'light' && ` background: ${colors.light};`}

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 100px;
  }
`;

export const Bubble1 = styled.div`
  position: absolute;
  border-radius: 50%;
  // border: 10px solid red;
  background-color: #4070cd50;
  filter: blur(209.71px);
  z-index: 1;

  bottom: -749px;
  left: 180px;
  width: 784px;
  height: 849px;

  @media screen and (min-width: 768px) {
    bottom: -789px;
    left: 95px;
  }

  @media screen and (min-width: 1440px) {
    left: 435px;
  }
`;

export const Bubble2 = styled(Bubble1)`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;

    width: 549px;
    height: 543px;
    top: 498px;
    left: 651px;
  }

  @media screen and (min-width: 1440px) {
    top: 458px;
    left: 1181px;
  }
`;
export const Bubble3 = styled(Bubble1)`
  width: 520px;
  height: 550px;
  left: -399px;
  top: 20px;

  background-color: ${({ theme }) =>
    theme === 'dark' ? '#4070CD50' : '#4070CD10'};

  @media screen and (min-width: 768px) {
    top: 20px;
    left: -623px;
    width: 784px;
    height: 830px;
  }

  @media screen and (min-width: 1440px) {
    height: 849px;
    left: -690px;
  }
`;
export const Bubble4 = styled(Bubble1)`
  background-color: #bce6d240;
  bottom: -662px;
  left: -372px;
  width: 774px;
  height: 762px;

  @media screen and (min-width: 768px) {
    bottom: -637px;
    left: -63px;
  }

  @media screen and (min-width: 1440px) {
    left: 193px;
  }
`;
