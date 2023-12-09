import { StyledLogoLink, LogoSvg } from './Logo.styled';
import sprite from '../../images/sprite.svg';

export const Logo = ({ theme }) => {
  return (
    <StyledLogoLink to="/home" theme={theme}>
      <LogoSvg theme={theme}>
        <use href={`${sprite}#logo`} />
      </LogoSvg>
      Drink Master
    </StyledLogoLink>
  );
};
