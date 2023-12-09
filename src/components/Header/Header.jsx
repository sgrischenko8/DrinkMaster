import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/theme/themeSlice';
import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import { ThemeToggler } from '../ThemeToggler/ThemeToggler';
import { User } from '../User/User';
import {
  HeaderContainer,
  FlexContainer,
  BurgerIcon,
  SvgClose,
} from './Header.styled';

import sprite from '../../images/sprite.svg';

export const Header = () => {
  const theme = useSelector(selectTheme);

  const [isDesktop, setIsDesktop] = useState(undefined);

  const handleWindowResize = () => {
    if (window.innerWidth >= 1440) {
      setIsDesktop(true);
      setIsMenuOpen(false);
      document.body.style.overflow = 'auto';
    } else {
      setIsDesktop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer theme={theme}>
      <Logo theme={theme} />
      {isDesktop || isMenuOpen ? (
        <Navigation
          isOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          location={'header'}
        />
      ) : null}
      <FlexContainer>
        {isDesktop || isMenuOpen ? <ThemeToggler /> : null}
        <User />
        {!isDesktop && (
          <>
            {isMenuOpen ? (
              <SvgClose theme={theme} onClick={toggleMenu}>
                <use href={`${sprite}#icon-close`} />
              </SvgClose>
            ) : (
              <BurgerIcon theme={theme} onClick={toggleMenu}>
                ||||
              </BurgerIcon>
            )}
          </>
        )}
      </FlexContainer>
    </HeaderContainer>
  );
};
