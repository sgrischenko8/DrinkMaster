import { SingupForm } from '../../components/SingupForm/SingupForm';
import { Title } from '../WelcomePage/WelcomePage.styled';
import { WelcomeBox } from 'src/components/WelcomeBox/WelcomeBox';

export default function SingupPage() {
  return (
    <WelcomeBox>
      <Title>Sign Up</Title>
      <SingupForm />
    </WelcomeBox>
  );
}
