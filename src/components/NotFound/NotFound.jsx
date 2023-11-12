import notFoundDesk from 'src/images/img-blue-iced-tea-desktop.png';
import notFoundDesk2 from 'src/images/img-blue-iced-tea-desktop@2x.png';
import { NotFoundWrapper, TextMessage } from './NotFound.styles';

const NotFound = ({ message }) => {
  return (
    <NotFoundWrapper>
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={`${notFoundDesk} 1x, ${notFoundDesk2} 2x`}
          width="261"
          height="326"
        />
        <source
          media="(min-width: 375px)"
          srcSet={`${notFoundDesk} 1x, ${notFoundDesk2} 2x`}
          width="198"
          height="247"
        />
        <img src={notFoundDesk} alt="not found" width="198" height="247" />
      </picture>
      <TextMessage>{message}</TextMessage>
    </NotFoundWrapper>
  );
};

export default NotFound;
