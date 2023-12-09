import { DrinksList } from 'src/components/DrinksList/DrinksList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchFavoriteDrinks } from 'src/redux/drinks/operations';
import {
  selectErrorFavorite,
  selectIsLoadingFavorite,
  selectFavoriteDrinksLimit,
  selectFavoriteDrinksMax,
  selectPage,
} from 'src/redux/drinks/selectors';
import PageTitle from 'src/components/PageTitle/PageTitle';
import { Loader } from 'src/components/Loader/Loader';
import NotFound from 'src/components/NotFound/NotFound';
import { selectTheme } from 'src/redux/theme/themeSlice';
import Paginator from 'src/components/Paginator/Paginator';

const FavoriteDrinkPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingFavorite);
  const error = useSelector(selectErrorFavorite);
  const max = useSelector(selectFavoriteDrinksMax);
  const limit = useSelector(selectFavoriteDrinksLimit);
  const page = useSelector(selectPage);
  const theme = useSelector(selectTheme);
  useEffect(() => {
    dispatch(fetchFavoriteDrinks(page));
  }, [page]);

  return (
    <>
      <PageTitle title="Favorites" theme={theme} />
      {isLoading && !error && <Loader />}
      {error && <NotFound message={'Something went wrong'} />}
      <DrinksList />
      <Paginator limit={limit} totalItems={max} />
    </>
  );
};

export default FavoriteDrinkPage;
