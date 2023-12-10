import styled from '@emotion/styled';
import { colors } from '../../../colors';

export const AllTitleIngredients = styled.h2`
  ${({ theme }) =>
    theme === 'dark'
      ? ` color: ${colors.halfLight};`
      : `color: ${colors.halfPrimaryDark};`}

  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  transition: color 250ms ease;
  margin-top: 18px;
  margin-bottom: 42px;

  @media (min-width: 768px) {
    margin-top: 80px;
    margin-bottom: 24px;
  }
`;

export const ListIngredient = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 21px;
  align-items: center;
  row-gap: 20px;
  @media (min-width: 768px) {
    row-gap: 22px;
    @media (min-width: 1440px) {
      column-gap: 35px;
    }
  }
`;

export const ImageIngredient = styled.img`
  width: 157px;
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 220px;
  }
`;

export const DescriptionIngredient = styled.div`
  margin-top: 14px;
  width: 157px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  @media (min-width: 768px) {
    width: 220px;
  }
`;

export const TitleIngredient = styled.p`
  ${({ theme }) =>
    theme === 'dark'
      ? ` color: ${colors.light};`
      : `color: ${colors.primaryDark};`}

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.34;
  }
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MeasureIngredien = styled.p`
  ${({ theme }) =>
    theme === 'dark'
      ? ` color: ${colors.halfLight};`
      : `color: ${colors.halfPrimaryDark};`}

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
