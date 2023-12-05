import { useSelector } from 'react-redux';
import {
  Container,
  Bubble1,
  Bubble2,
  Bubble3,
  Bubble4,
} from './MainAppContainer.styled';
import { selectTheme } from 'src/redux/theme/themeSlice';

const MainAppContainer = ({ children }) => {
  const theme = useSelector(selectTheme);

  return (
    <Container theme={theme}>
      {children}
      <Bubble1 />
      <Bubble2 />
      <Bubble3 theme={theme} />
      <Bubble4 />
    </Container>
  );
};

export default MainAppContainer;
