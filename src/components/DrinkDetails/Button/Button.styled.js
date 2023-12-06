import styled from '@emotion/styled';
import { colors } from '../../../colors';

export const StyledButton = styled.button`
  margin-bottom: 80px;
  ${({ theme }) =>
    theme === 'dark'
      ? ` color: ${colors.secondaryDark};`
      : `color: ${colors.light};`}
  ${({ theme }) =>
    theme === 'dark'
      ? ` background-color: ${colors.light};`
      : `background-color: ${colors.secondaryDark};`}
  transition:
    color 250ms ease,
    background-color 250ms ease;

  &:hover {
    ${({ theme }) =>
      theme === 'dark'
        ? ` background-color: ${colors.secondaryDark};`
        : `background-color: ${colors.light};`}
    ${({ theme }) =>
      theme === 'dark'
        ? ` color: ${colors.light};`
        : `color: ${colors.secondaryDark};`}
  }

  @media (min-width: 768px) {
    margin-bottom: 80px;
  }
`;
