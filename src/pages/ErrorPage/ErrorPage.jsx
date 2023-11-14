import Footer from 'src/components/Footer/Footer';
import Header from 'src/components/Header/Header';

import errorImgDesk from 'src/images/img-blue-iced-tea-desktop.png';
import errorImgDesk2 from 'src/images/img-blue-iced-tea-desktop@2x.png';
import {
  ErrorContainer,
  ErrorWrapper,
  StyledBGElement2,
  StyledFirstSymbol,
  StyledSecondSymbol,
} from './ErrorPage.styled';
// import MainAppContainer from 'src/components/MainAppContainer/MainAppContainer';

const ErrorPage = () => {
  return (
    <>
      <Header />
      {/* <MainAppContainer> */}
      <ErrorContainer>
        <ErrorWrapper>
          <StyledFirstSymbol>4</StyledFirstSymbol>
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={`${errorImgDesk} 1x, ${errorImgDesk2} 2x`}
              width="158"
              height="201"
            />
            <source
              media="(min-width: 375px)"
              srcSet={`${errorImgDesk} 1x, ${errorImgDesk2} 2x`}
              width="123"
              height="156"
            />
            <img
              src={errorImgDesk}
              alt="error 404"
              loading="lazy"
              width="123"
              height="156"
            />
          </picture>
          <StyledSecondSymbol>4</StyledSecondSymbol>
        </ErrorWrapper>
        <StyledBGElement2 />
      </ErrorContainer>
      {/* </MainAppContainer> */}
      <Footer />
    </>
  );
};

export default ErrorPage;
