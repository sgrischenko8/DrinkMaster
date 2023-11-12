import styled from 'styled-components';
import { ReactComponent as CocktailIconSvg } from 'src/images/cocktailLoader.svg';
// import { colors } from '../../colors';

export const LoaderWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
`;

export const CocktailIcon = styled(CocktailIconSvg)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  width: 100px;
  height: 100px;
  [stroke='#f3f3f3'] {
    stroke-dasharray: 400;
    stroke-dashoffset: 1000;
    animation: dash 4s linear alternate infinite;
  }
  [stroke='transparent'] {
    animation-name: fill;
    animation-duration: 4s;
    animation-direction: normal;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes dash {
    from {
      stroke-dashoffset: 822;
    }
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes fill {
    0% {
      opacity: 0.02;
      scale: 0;
      transform: translate(65%, 110%);
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      scale: 1;
      transform: translate(0%, 0%);
    }
  }
`;
