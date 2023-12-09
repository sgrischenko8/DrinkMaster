import styled from 'styled-components';

export const FooterContainer = styled.footer`
  border-top: 1px solid rgba(243, 243, 243, 0.2);
  width: 100%;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 40px 20px 10px;
  width: 375px;

  @media screen and (min-width: 768px) {
    padding: 80px 32px 16px;
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    padding: 80px 100px 16px;
    width: 1440px;
  }
`;

export const MainWrap = styled.div`
  margin-bottom: 80px;
  display: flex;
  row-gap: 40px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  row-gap: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    @media screen and (min-width: 1440px) {
      flex-direction: row;
    }
  }
`;

export const BrandLinksDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 28px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 411px;
    gap: 40px;
  }
`;
