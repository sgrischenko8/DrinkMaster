import { Logo } from '../Logo/Logo';
import FooterNav from '../FooterNav/FooterNav';
import FollowUs from '../FollowUs/FollowUs';
import SubscribeForm from '../SubscribeForm/SubscribeForm';
import { FooterRightsAndPolicy } from '../FooterRightsAndPolicy/FooterRightsAndPolicy';

import {
  FooterContainer,
  MainWrap,
  LogoFollowWrap,
  LogoFollowNavWrap,
  Container,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <MainWrap>
          <LogoFollowNavWrap>
            <LogoFollowWrap>
              <Logo theme="dark" />
              <FollowUs theme="dark" />
            </LogoFollowWrap>
            <FooterNav />
          </LogoFollowNavWrap>
          <SubscribeForm />
        </MainWrap>
        <FooterRightsAndPolicy />
      </Container>
    </FooterContainer>
  );
};

export default Footer;
