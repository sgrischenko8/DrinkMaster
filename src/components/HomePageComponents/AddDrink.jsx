import { useSelector } from 'react-redux';
import {
  TitleWrapper,
  AddDrinkWrapper,
  AppDescription,
  StyledLink,
  DesktopTitle,
  PictureWrapper,
} from './AddDrink.styled';
import HomePageImageMobile from 'src/images/img-blue-iced-tea-desktop.png';
import HomePageImageMobile2 from 'src/images/img-blue-iced-tea-desktop@2x.png';

import PageTitle from '../../components/PageTitle/PageTitle';
import { selectTheme } from 'src/redux/theme/themeSlice';

export const AddDrink = () => {
  const theme = useSelector(selectTheme);
  return (
    <TitleWrapper>
      <DesktopTitle>
        <PageTitle
          title="Craft Your Perfect Drink with Drink Master"
          theme={theme}
          marginMobile="16px"
          marginTablet="28px"
          marginDesktop="28px"
        />
        <AddDrinkWrapper>
          <AppDescription theme={theme}>
            Unlock your inner mixologist with Drink Master, your one-stop
            destination for exploring, crafting, and mastering the worlds finest
            beverages.
          </AppDescription>
          <StyledLink to="/add" theme={theme}>
            Add drinks
          </StyledLink>
        </AddDrinkWrapper>
      </DesktopTitle>
      <PictureWrapper>
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={`${HomePageImageMobile} 1x, ${HomePageImageMobile2} 2x`}
            width="359"
            height="445"
          />
          <source
            media="(min-width: 375px)"
            srcSet={`${HomePageImageMobile} 1x, ${HomePageImageMobile2} 2x`}
            width="252"
            height="313"
          />
          <img
            src={HomePageImageMobile}
            alt="Coctail image"
            loading="lazy"
            width="252"
            height="313"
          />
        </picture>
      </PictureWrapper>
    </TitleWrapper>
  );
};
