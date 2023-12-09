import styled from 'styled-components';
import { colors } from '../../colors';

export const Label = styled.label`
  position: relative;
  width: 40px;
  height: 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.1) inset;
  cursor: pointer;
  background: ${({ theme }) =>
    theme === 'dark' ? `${colors.light}` : `${colors.secondaryDark}`};
`;

export const Toggler = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  position: absolute;
  left: 1px;

  width: 18px;
  height: 18px;
  translate: 0 -50%;
  top: 50%;
  transition: transform 300ms ease;
  background: ${colors.light};

  &:checked {
    right: 1px;
    left: auto;
    background: ${colors.secondaryDark};
  }
`;
