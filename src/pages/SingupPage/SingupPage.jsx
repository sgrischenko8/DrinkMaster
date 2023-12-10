import { CredentialForm } from 'src/components/CredentialForm/CredentialForm';
import { Title } from '../WelcomePage/WelcomePage.styled';
import { WelcomeBox } from 'src/components/WelcomeBox/WelcomeBox';

export default function SingupPage() {
  return (
    <WelcomeBox>
      <Title color={'#f3f3f3'}>Sign Up</Title>
      <CredentialForm page={'signun'} />
    </WelcomeBox>
  );
}
