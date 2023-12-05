import { SinginForm } from '../../components/SinginForm/SinginForm';
import { Title } from '../WelcomePage/WelcomePage.styled';
import { WelcomeBox } from 'src/components/WelcomeBox/WelcomeBox';

export default function SinginPage() {
  return (
    <WelcomeBox>
      <Title>Sign In</Title>
      <SinginForm />
    </WelcomeBox>
  );
}
