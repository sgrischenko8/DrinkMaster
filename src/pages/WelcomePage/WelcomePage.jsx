import {
  HeroImg,
  FlexContainer,
  Title,
  StyledCocktailIcon,
  WelcomeText,
  ButtonBox,
  AuthLink,
  Signin,
} from './WelcomePage.styled';
import { WelcomeBox } from 'src/components/WelcomeBox/WelcomeBox';

export default function WelcomePage() {
  return (
    <WelcomeBox>
      <HeroImg />
      <FlexContainer>
        <Title>Welcome to the app!!</Title>
        <StyledCocktailIcon />
      </FlexContainer>

      <WelcomeText>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </WelcomeText>

      <ButtonBox>
        <AuthLink to="/signup">Sign Up</AuthLink>
        <Signin to="/signin">Sign In</Signin>
      </ButtonBox>
    </WelcomeBox>
  );
}
