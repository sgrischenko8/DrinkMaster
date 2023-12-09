import {
  Nav,
  NavigationList,
  NavListItem,
  StyledNavigationLink,
} from './Navigation.styled';
import { selectTheme } from 'src/redux/theme/themeSlice';
import { useSelector } from 'react-redux';

import {
  BubbleWelcome1,
  BubbleWelcome2,
} from 'src/components/WelcomeBox/WelcomeBox.styled';
import { Bubble2 } from 'src/components/MainAppContainer/MainAppContainer.styled';

export const Navigation = ({ isOpen, setIsMenuOpen, location }) => {
  const theme = useSelector(selectTheme);

  const navList = [
    ['Home', '/home'],
    ['Drinks', '/drinks'],
    ['Add drink', '/add'],
    ['My drinks', '/my'],
    ['Favorites', '/favorites'],
  ];
  if (location === 'footer') {
    navList.slice(0, 1);
  }

  console.log(isOpen);

  return (
    <div>
      <Nav isOpen={isOpen} theme={theme}>
        <NavigationList isOpen={isOpen}>
          {navList.map((el) => (
            <NavListItem key={el[0]}>
              <StyledNavigationLink
                to={el[1]}
                theme={theme}
                onClick={() => setIsMenuOpen(false)}
              >
                {el[0]}
              </StyledNavigationLink>
            </NavListItem>
          ))}
        </NavigationList>
      </Nav>
      {isOpen && (
        <>
          <BubbleWelcome1 />
          <BubbleWelcome2 />
          <Bubble2 />
        </>
      )}
    </div>
  );
};
