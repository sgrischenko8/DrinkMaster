import styled from 'styled-components';
import { colors } from '../../colors';

export const PrivacyWrap = styled.div`
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

export const MainTitle = styled.h1`
  color: ${colors.light};
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  color: ${colors.light};
  font-size: 22px;
  margin-bottom: 40px;
`;

export const PrivacyText = styled.div`
  color: ${colors.light};
  font-size: 16px;
  margin-bottom: 40px;
`;

export const SubTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
