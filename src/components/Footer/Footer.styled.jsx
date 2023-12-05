import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 40px;
  padding-bottom: 18px;
  box-sizing: border-box;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-right: 32px;
    padding-left: 32px;
    padding-top: 80px;
    padding-bottom: 24px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-right: 100px;
    padding-left: 100px;
  }
`;

export const FooterContainer = styled.footer`
  /* padding-top: 40px;
  padding-bottom: 18px; */
  border-top: 1px solid rgba(243, 243, 243, 0.2);
  width: 100%;

  /* @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 24px;
  } */
`;

export const MainWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 230px;
  }
`;

export const LogoFollowWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;

  @media screen and (min-width: 768px) {
    gap: 28px;
  }
`;

export const LogoFollowNavWrap = styled.div`
  display: flex;
  gap: 90px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    gap: 40px;
    margin-bottom: 0px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 411px;
  }
`;
