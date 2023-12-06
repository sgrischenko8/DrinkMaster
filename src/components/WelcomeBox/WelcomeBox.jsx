import {
  WelcomeWrapper,
  HeroImg,
  BubbleWelcome1,
  BubbleWelcome2,
  BubbleWelcome3,
} from './WelcomeBox.styled';

export const WelcomeBox = ({ children }) => {
  return (
    <WelcomeWrapper>
      {children}
      <HeroImg />
      <BubbleWelcome1 />
      <BubbleWelcome2 />
      <BubbleWelcome3 />
    </WelcomeWrapper>
  );
};
