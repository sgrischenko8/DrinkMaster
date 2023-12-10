import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../colors';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
  ${({ theme }) =>
    theme === 'dark'
      ? ` color: ${colors.light};`
      : `color: ${colors.primaryDark};`}

  @media only screen and (min-width: 768px) {
    row-gap: 80px;
    column-gap: 20px;
  }
`;
export const DrinksItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media only screen and (min-width: 768px) {
    width: 342px;
    gap: 24px;
  }
  @media only screen and (min-width: 1440px) {
    width: 400px;
  }
`;
export const DrinkPhoto = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const DrinkTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 0;
  @media only screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
export const DrinkDesc = styled.p`
  height: 75px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  @media only screen and (min-width: 768px) {
    height: 110px;
    font-size: 16px;
    line-height: calc(22 / 16);
    -webkit-line-clamp: 5;
  }
  @media only screen and (min-width: 1440px) {
    padding-top: 4px;
    height: 96px;
    -webkit-line-clamp: 4;
  }
`;
export const DrinkAlc = styled.span`
  color: ${colors.disabled};
  @media only screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(18 / 16);
  }
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const BtnWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
export const DeleteButton = styled.button`
  padding: 0;
  display: flex;
  width: 46px;
  height: 46px;
  justify-content: center;
  align-items: center;
  background: #161f37;
  @media only screen and (min-width: 768px) {
    width: 56px;
    height: 56px;
  }
`;
export const SeeMoreButton = styled(NavLink)`
  color: ${colors.light};
  background: ${colors.secondaryDark};
`;
