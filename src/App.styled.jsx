import styled from '@emotion/styled';
import { colors } from './colors';

export const AppWrapper = styled.div`
  width: 100%;
  ${({ theme }) => theme === 'light' && ` background: ${colors.light};`}
  background-size: 100% 100%;
  background-image: radial-gradient(
      circle at center,
      rgba(188, 230, 210, 0.4) 10%,
      rgba(255, 255, 255, 0) 70%
    ),
    radial-gradient(
      circle at center,
      rgba(64, 112, 205, 0.5) 0%,
      rgba(255, 255, 255, 0) 50%
    );
  background-repeat: no-repeat, repeat-y, no-repeat;
  background-position:
    0 0,
    -720px 0,
    35vw calc(100vh + 400px);
  background-size:
    357px 357px,
    1240px 820px,
    1400px 1400px;
`;
