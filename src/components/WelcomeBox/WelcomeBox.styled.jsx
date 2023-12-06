import styled from 'styled-components';
import { Bubble2, Bubble3 } from '../MainAppContainer/MainAppContainer.styled';
import hero from 'src/images/hero.jpg';
import hero2 from 'src/images/hero@2x.jpg';

export const WelcomeWrapper = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  @media screen and (min-width: 768px) {
    align-items: flex-start;
    padding: 0 64px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 100px;
  }
`;

export const HeroImg = styled.div`
  position: absolute;
  left: 80px;
  top: 0;
  width: 100%;
  height: 100%;
z-index:-1;
  background: linear-gradient(0deg, #0a0a1120 0%, #0a0a1120 100%),
    linear-gradient(1deg, #0a0a11 0%, rgba(10, 10, 17, 0) 25%),
    linear-gradient(82deg, #0a0a11 0%, rgba(10, 10, 17, 0) 100%), url(${hero});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background: linear-gradient(0deg, #0a0a1120 0%, #0a0a1120 100%),
      linear-gradient(1deg, #0a0a11 0%, rgba(10, 10, 17, 0) 100%),
      linear-gradient(82deg, #0a0a11 0%, rgba(10, 10, 17, 0) 100%),
      url(${hero2});
  }

  background-position: left 20% center;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    background: linear-gradient(0deg, rgba(10, 10, 17, 0) 0%, #0a0a1120 100%),
    linear-gradient(1deg, #0a0a11 0%, rgba(10, 10, 17, 0) 25%),
    linear-gradient(82deg, #0a0a11 15%, rgba(10, 10, 17, 0) 30%), url(${hero});

   left: 302px;
    background-position: left center;
    background-size:cover; 
    }
    @media screen and (min-width: 1440px) {
       background: linear-gradient(0deg, rgba(10, 10, 17, 0) 0%, #0a0a1120 100%),
    linear-gradient(1deg, #0a0a11 0%, rgba(10, 10, 17, 0) 25%),
    linear-gradient(82deg, #0a0a11 8%, rgba(10, 10, 17, 0) 30%), url(${hero});
      left: 737px;
      background-position: left;
      background-size:60%; 
      }
    }
  }

`;

export const BubbleWelcome1 = styled(Bubble3)`
  background-color: #4070cd50;
  @media screen and (min-width: 768px) {
    top: -50px;
    left: -665px;
  }

  @media screen and (min-width: 1440px) {
    top: -231px;
    left: -494px;
  }
`;
export const BubbleWelcome2 = styled(Bubble3)`
  background-color: #bce6d240;
  filter: blur(89.71px);
  width: 257px;
  height: 247px;
  top: 84px;
  left: 42px;

  @media screen and (min-width: 768px) {
    background-color: #bce6d230;
    width: 387px;
    height: 372px;
    top: 46px;
    left: 0;
  }

  @media screen and (min-width: 1440px) {
    background-color: #bce6d240;
    height: 381px;
    top: -132px;
    left: 171px;
  }
`;
export const BubbleWelcome3 = styled(Bubble2)`
  display: block;
`;
