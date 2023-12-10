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
      <div>{children}</div>

      <HeroImg />
      <BubbleWelcome1 />
      <BubbleWelcome2 />
      <BubbleWelcome3 />
    </WelcomeWrapper>
  );
};
