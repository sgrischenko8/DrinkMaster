import { StyledBGElement5 } from './HomePage.styled';
import { AddDrink } from '../../components/HomePageComponents/AddDrink';
import { PreviewDrinks } from '../../components/HomePageComponents/PreviewDrinks';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectErrorNew,
  selectIsLoadingNew,
} from 'src/redux/drinks/selectors.js';

import { fetchNewDrinks } from 'src/redux/drinks/operations.js';
import Loader from 'src/components/Loader/Loader';
import { selectTheme } from 'src/redux/theme/themeSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingNew);
  const error = useSelector(selectErrorNew);
  const theme = useSelector(selectTheme);

  useEffect(() => {
    dispatch(fetchNewDrinks());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <>
      <AddDrink />
      <PreviewDrinks />
      <StyledBGElement5 theme={theme} />
    </>
  );
};
export default HomePage;
