import { AddDrink } from 'src/components/HomePageComponents/AddDrink';
import { PreviewDrinks } from 'src/components/HomePageComponents/PreviewDrinks';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectErrorNew,
  selectIsLoadingNew,
} from 'src/redux/drinks/selectors.js';

import { fetchNewDrinks } from 'src/redux/drinks/operations.js';
import { Loader } from 'src/components/Loader/Loader';

const HomePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingNew);
  const error = useSelector(selectErrorNew);

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
    </>
  );
};
export default HomePage;
