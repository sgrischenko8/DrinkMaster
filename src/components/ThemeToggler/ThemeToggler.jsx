import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme, selectTheme } from '../../redux/theme/themeSlice';
import { Label, Toggler } from './ThemeToggler.styled';

export const ThemeToggler = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  return (
    <Label theme={theme}>
      <Toggler
        type="checkbox"
        checked={theme === 'dark'}
        onChange={() => dispatch(toggleTheme())}
        title="dark/light switcher"
      />
    </Label>
  );
};
