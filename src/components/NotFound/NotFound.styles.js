import styled from 'styled-components';
import { colors } from '../../colors';

export const NotFoundWrapper = styled.div`
  margin-top: 91px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    margin-top: 100px;
  }

  @media (min-width: 1440px) {
    margin-top: 67px;
  }
`;

export const TextMessage = styled.p`
  margin-top: 32px;
  color: ${colors.light};
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: calc(18 / 16);
  }
`;
