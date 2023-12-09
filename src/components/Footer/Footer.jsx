import { Logo } from '../Logo/Logo';
import FollowUs from '../FollowUs/FollowUs';
import SubscribeForm from './SubscribeForm/SubscribeForm';
import { FooterRightsAndPolicy } from './FooterRightsAndPolicy/FooterRightsAndPolicy';
import { Navigation } from '../Navigation/Navigation';
import {
  FooterContainer,
  Container,
  MainWrap,
  FlexContainer,
  BrandLinksDiv,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <MainWrap>
          <FlexContainer>
            <BrandLinksDiv>
              <Logo theme="dark" />
              <FollowUs theme="dark" />
            </BrandLinksDiv>
            <Navigation isopen={false} location={'footer'} theme={'dark'} />
          </FlexContainer>

          <SubscribeForm />
        </MainWrap>
        <FooterRightsAndPolicy />
      </Container>
    </FooterContainer>
  );
};

export default Footer;
