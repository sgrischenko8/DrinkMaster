import styled from 'styled-components';
// import css from './PageTitle.module.css';

const Title = styled.h1`
  color: ${({ theme }) => (theme === 'light' ? '#0A0A11' : '#F3F3F3')};
  margin-bottom: ${({ $marginM }) => $marginM};
  @media screen and (min-width: 768px) {
    margin-bottom: ${({ $marginT }) => $marginT};
    @media screen and (min-width: 1440px) {
      margin-bottom: ${({ $marginD }) => $marginD};
    }
  }
`;

const PageTitle = ({
  title,
  theme,
  marginMobile,
  marginTablet,
  marginDesktop,
}) => {
  return (
    <Title
      theme={theme}
      $marginM={marginMobile}
      $marginT={marginTablet}
      $marginD={marginDesktop}
    >
      {title}
    </Title>
  );
};

export default PageTitle;
