import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../colors';
export const PopularDrinks = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  ${({ theme }) =>
    theme === 'dark'
      ? ` color: ${colors.light};`
      : `color: ${colors.primaryDark};`}
  @media only screen and (min-width: 768px) {
    gap: 80px;
  }
  @media only screen and (min-width: 1440px) {
    width: 313px;
  }
`;

export const PopularTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: calc(24 / 18);
  margin-bottom: 28px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 24px;
    line-height: calc(32 / 24);
  }
`;

export const List = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 24px;
  color: ${colors.light};
  @media only screen and (min-width: 768px) {
    gap: 32px;
  }
  @media only screen and (min-width: 1440px) {
    gap: 28px;
  }
`;
export const ListItem = styled.li`
  width: 100%;
  height: 90px;
  @media only screen and (min-width: 768px) {
    width: 336px;
  }
  @media only screen and (min-width: 1440px) {
    width: 100%;
  }
`;
export const Photo = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 12px;
`;
export const DrinkDescr = styled.p`
  margin: 0;
  display: block;
  overflow: hidden;
  ${({ theme }) =>
    theme === 'dark'
      ? ` color: rgba(243, 243, 243, 0.5);`
      : `color: rgba(10, 10, 17, 0.50);`}
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: calc(20 / 14);
`;
export const DrinkName = styled.h3`
  ${({ theme }) =>
    theme === 'dark'
      ? ` color: ${colors.light};`
      : `color: ${colors.primaryDark};`}
  font-size: 16px;
  line-height: 1.4;
`;
export const DescrWrapper = styled.div`
  margin-bottom: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media only screen and (min-width: 1440px) {
    width: 209px;
  }
`;
export const DrinkLink = styled(NavLink)`
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 14px;
`;
