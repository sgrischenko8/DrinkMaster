import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  width: 241px;
  position: relative;
  top: 196px;
  left: 50%;
  transform: translate(-50%, 0%) scale(1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    top: 238px;
    width: 301px;
  }
  @media (min-width: 1440px) {
    top: 200px;
    width: 402px;
  }
`;

export const GiantNumber = styled.span`
  color: rgba(243, 243, 243, 0.1);
  font-family: Manrope;
  font-size: 120px;
  font-weight: 600;
  line-height: 1.03;

  @media (min-width: 768px) {
    font-size: 150px;
    line-height: 0.82;
  }
  @media (min-width: 1440px) {
    font-size: 200px;
    line-height: 1;
  }
`;

export const Picture = styled.picture`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
`;
