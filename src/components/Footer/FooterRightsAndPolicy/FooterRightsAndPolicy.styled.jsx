import styled from 'styled-components';
import { colors } from '../../../colors';

export const RightsAndPolicyWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 153px;
    font-size: 14px;
    line-height: calc(18 / 14);
  }

  @media screen and (min-width: 1440px) {
    gap: 689px;
  }

  font-size: 12px;
  font-weight: 400;
  line-height: calc(16 / 12);
  letter-spacing: -0.02em;
  color: rgba(243, 243, 243, 0.5);
`;

export const PolicyLinksWrap = styled.div`
  display: flex;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }
`;

export const Button = styled.button`
  padding: 8px 0;
  color: rgba(243, 243, 243, 0.5);
  font-size: inherit;
  font-weight: 400;
  line-height: inherit;
  letter-spacing: inherit;

  transition: color 250ms ease;
  transition: transform 250ms ease;

  &:active {
    color: ${colors.light};
  }

  &:hover,
  &:focus {
    color: ${colors.light};
    text-decoration: underline;
  }
`;

export const PrivacyWrap = styled.div`
  margin: 0 auto;
  padding: 80px 20px 20px;
  position: relative;
  width: 75%;
  height: 96%;
  border-radius: 24px;
  background-color: black;
  border: 1px solid #ffffff50;
  overflow-y: scroll;

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
  width: 24px;
  height: 24px;
  background-color: inherit;
  border: none;

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
