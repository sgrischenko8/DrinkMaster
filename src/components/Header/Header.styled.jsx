import styled from 'styled-components';
import { colors } from 'src/colors';

export const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: ${({ theme }) =>
    theme === 'dark'
      ? `1px solid rgba(243, 243, 243, 0.2)`
      : `1px solid rgba(22, 31, 55, 0.10)`};
  @media screen and (min-width: 768px) {
    padding: 20px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 20px 100px;
  }
`;

export const FlexContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 14px;
  @media screen and (min-width: 768px) {
    gap: 24px;
  }

  @media screen and (min-width: 1440px) {
    gap: 28px;
  }
`;

const iconStyle = `
 width: 32px;
  height: 32px;
  @media screen and (min-width: 768px) {
    width: 38px;
    height: 38px;
  `;
export const BurgerIcon = styled.button`
  padding: 0;
  line-height: 1;
  font-size: 32px;
  font-weight: 100;
  letter-spacing: -0.05em;
  color: ${({ theme }) =>
    theme === 'dark' ? `${colors.light}` : `${colors.secondaryDark}`};
  transform: rotate(90deg);
  @media screen and (min-width: 768px) {
    font-size: 38px;
  }
  &:hover {
    opacity: 0.75;
  }
  ${iconStyle};
`;

export const SvgClose = styled.svg`
  stroke: ${({ theme }) =>
    theme === 'dark' ? `${colors.light}` : `${colors.primaryDark}`};
  ${iconStyle}
`;
