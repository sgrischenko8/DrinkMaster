import styled from 'styled-components';
import { colors } from '../../colors';

export const RightsAndPolicyWrap = styled.div`
  z-index: 10;
  position: relative;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 153px;
    align-items: flex-end;
  }

  @media screen and (min-width: 1440px) {
    gap: 689px;
  }
`;

export const AllRightsText = styled.p`
  color: rgba(243, 243, 243, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.24px;
  margin-top: 80px;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.28px;
    margin-bottom: 0px;
  }
`;

export const PolicyLinksWrap = styled.div`
  display: flex;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }
`;

export const Button = styled.button`
  color: rgba(243, 243, 243, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.24px;

  transition: color 250ms ease;
  transition: transform 250ms ease;

  &.active {
    color: ${colors.light};
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.28px;
  }

  &:hover,
  &:focus {
    color: ${colors.light};
    text-decoration: underline;
  }
`;

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

  &:hover,
  &:focus {
    scale: 1.2;
    outline: none;
  }
  &:active {
    scale: 1;
    outline: none;
  }
`;
