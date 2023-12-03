import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';
import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';
import MainAppContainer from 'src/components/MainAppContainer/MainAppContainer';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <MainAppContainer>
        <Suspense Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MainAppContainer>
      <Footer />
    </>
  );
};

export default SharedLayout;
