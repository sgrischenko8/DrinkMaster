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

  background-color: inherit;
  border: none;

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
