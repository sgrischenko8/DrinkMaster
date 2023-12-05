import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';
import MainAppContainer from 'src/components/MainAppContainer/MainAppContainer';
import { selectTheme } from 'src/redux/theme/themeSlice';

const SharedLayout = () => {
  const theme = useSelector(selectTheme);
  return (
    <>
      <MainAppContainer>
        <Header />
        <main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>

        <Footer />
      </MainAppContainer>
    </>
  );
};

export default SharedLayout;
