import styled from 'styled-components';

const Title = styled.h1`
  margin-bottom: ${({ $marginM }) => $marginM};
  color: ${({ theme }) => (theme === 'light' ? '#0A0A11' : '#F3F3F3')};
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
