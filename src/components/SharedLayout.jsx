import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectTheme } from 'src/redux/theme/themeSlice';
import { Loader } from './Loader/Loader';
import { Header } from './Header/Header';
import Footer from './Footer/Footer';
import MainAppContainer from './MainAppContainer/MainAppContainer';

const SharedLayout = () => {
  // const theme = useSelector(selectTheme);

  return (
    <>
      <MainAppContainer>
        <Header />
        <main>
          <div id="limiter">
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
        </main>

        <Footer />
      </MainAppContainer>
    </>
  );
};

export default SharedLayout;
