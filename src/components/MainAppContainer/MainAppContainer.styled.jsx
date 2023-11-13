import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
  position: relative;
  box-sizing: border-box;
  overflow-x: hidden;
  /* min-width: 375px; */

  /* @media screen and (max-width: 375px) {
    width: 375px;
  } */

  @media screen and (max-width: 767px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    /* max-width: 768px; */
    width: 768px;
    padding-right: 32px;
    padding-left: 32px;
  }

  @media screen and (min-width: 1440px) {
    /* max-width: 1440px; */
    width: 1440px;
    padding-right: 100px;
    padding-left: 100px;
    overflow: visible;
  }
`;

export const StyledBGElement1 = styled.div`
  position: absolute;
  background-color: ${({ theme }) =>
    theme === 'dark' ? 'rgba(64, 112, 205, 0.5)' : 'rgba(64, 112, 205, 0.10)'};
  filter: blur(105px);
  z-index: -10;

  @media screen and (min-width: 768px) {
    width: 549px;
    height: 543px;
    top: 414px;
    left: 651px;
  }

  @media screen and (min-width: 1440px) {
    width: 549px;
    height: 543px;
    top: 374px;
    left: 1181px;
  }
`;

export const StyledBGElement2 = styled.div`
  position: absolute;
  /* background-color: rgba(64, 112, 205, 0.5); */
  background-color: ${({ theme }) =>
    theme === 'dark' ? 'rgba(64, 112, 205, 0.5)' : 'rgba(64, 112, 205, 0.10)'};
  filter: blur(105px);
  z-index: -10;
  width: 520px;
  height: 550px;
  top: -52px;
  right: 254px;

  @media screen and (min-width: 768px) {
    width: 784px;
    height: 830px;
    top: -65px;
    right: 607px;
  }

  @media screen and (min-width: 1440px) {
    width: 784px;
    height: 849px;
    top: -64px;
    right: 1346px;
  }
`;