import styled from 'styled-components';
import { colors } from '../../colors';

export const PrivacyWrap = styled.div`
position: relative;
  width: 75%;
  height: 96%;
  border-radius: 24px;
  background-color: black;
  border: 1px solid #ffffff50;
  overflow-y: scroll;
  
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 80px;
  padding-bottom: 20px;

  @media screen and (min-width: 768px) {
    padding-right: 32px;
    padding-left: 32px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 24px;
  height: 24px;
  font-weight: 300;
  font-size: 38px;
  line-height: 1;
  color: #f3f3f3;
  background-color: inherit;
  border: none;
  transform: rotate(45deg);

  &:hover, &:focus {
    scale: 1.2;
  outline: none;
  }
  &:active {
    scale: 1;
  outline: none;
  }
`;

export const MainTitle = styled.h1`
  color: ${colors.light};
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  color: ${colors.light};
  font-size: 22px;
  margin-bottom: 40px;
`;

export const PrivacyText = styled.div`
  color: ${colors.light};
  font-size: 16px;
  margin-bottom: 40px;
`;

export const SubTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
