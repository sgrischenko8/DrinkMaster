import { lazy, useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Outlet } from 'react-router-dom';
import { selectIsRefreshing } from './redux/auth/selectors';
import { refreshUser } from './redux/auth/operations';
import SharedLayout from './components/SharedLayout';
import { PublicRoute } from './components/PublicRoute/PublicRoute';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { Loader } from './components/Loader/Loader';

const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const SingupPage = lazy(() => import('./pages/SingupPage/SingupPage'));
const SinginPage = lazy(() => import('./pages/SinginPage/SinginPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const DrinksPage = lazy(() => import('./pages/DrinksPage/DrinksPage'));
const AddDrinkPage = lazy(() => import('./pages/AddDrinkPage/AddDrinkPage'));
const MyDrinksPage = lazy(() => import('./pages/MyDrinksPage/MyDrinksPage'));
const FavoriteDrinkPage = lazy(() =>
  import('./pages/FavoriteDrinkPage/FavoriteDrinkPage'),
);
const DrinkDetailsPage = lazy(() => import('./pages/DrinkPage/DrinkPage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));

import LoadingPage from './pages/LoadingPage/LoadingPage';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <PublicRoute redirectTo="/home" component={<WelcomePage />} />
          }
        />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/auth/google-redirect" element={<LoadingPage />} />
        <Route path="/auth/google" element={<LoadingPage />} />
        <Route
          path="/signup"
          element={
            <PublicRoute redirectTo="/home" component={<SingupPage />} />
          }
        />
        <Route
          path="/signin"
          element={
            <PublicRoute redirectTo="/home" component={<SinginPage />} />
          }
        />
        <Route element={<SharedLayout />}>
          <Route
            path="/home"
            element={
              <PrivateRoute redirectTo="/signin" component={<HomePage />} />
            }
          />
          <Route
            path="/drinks"
            element={
              <PrivateRoute redirectTo="/signin" component={<DrinksPage />} />
            }
          />
          <Route
            path="/add"
            element={
              <PrivateRoute redirectTo="/signin" component={<AddDrinkPage />} />
            }
          />
          <Route
            path="/my"
            element={
              <PrivateRoute redirectTo="/signin" component={<MyDrinksPage />} />
            }
          />
          <Route
            path="/favorites"
            element={
              <PrivateRoute
                redirectTo="/signin"
                component={<FavoriteDrinkPage />}
              />
            }
          />

          <Route
            path="drink/:drinkId"
            element={
              <PrivateRoute component={<DrinkDetailsPage />}></PrivateRoute>
            }
          />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
export default App;
