import { ErrorWrapper, GiantNumber, Picture } from './ErrorPage.styled';
import errorImgDesk from 'src/images/img-blue-iced-tea-desktop.png';
import errorImgDesk2 from 'src/images/img-blue-iced-tea-desktop@2x.png';

const ErrorPage = () => {
  return (
    <ErrorWrapper>
      <GiantNumber>4</GiantNumber>
      <GiantNumber>4</GiantNumber>
      <Picture>
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
        <img src={errorImgDesk} alt="error 404" width="123" height="156" />
      </Picture>
    </ErrorWrapper>
  );
};

export default ErrorPage;
