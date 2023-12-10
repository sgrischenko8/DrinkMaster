import {
  Nav,
  NavigationList,
  NavListItem,
  StyledNavigationLink,
} from './Navigation.styled';

import {
  BubbleWelcome1,
  BubbleWelcome2,
} from 'src/components/WelcomeBox/WelcomeBox.styled';
import { Bubble2 } from 'src/components/MainAppContainer/MainAppContainer.styled';

export const Navigation = ({ isOpen, setIsMenuOpen, location, theme }) => {
  const navList = [
    ['Home', '/home'],
    ['Drinks', '/drinks'],
    ['Add drink', '/add'],
    ['My drinks', '/my'],
    ['Favorites', '/favorites'],
  ];
  if (location === 'footer') {
    navList.shift();
  }

  return (
    <div>
      <Nav isopen={isOpen} theme={theme} location={location}>
        <NavigationList location={location} isopen={isOpen}>
          {navList.map((el) => (
            <NavListItem key={el[0]} location={location}>
              <StyledNavigationLink
                to={el[1]}
                theme={theme}
                location={location}
                onClick={() => {
                  document.body.style.overflow = 'auto';
                  setIsMenuOpen(false);
                }}
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
