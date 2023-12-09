import { DrinksListItem } from './DrinksListItem';
import { List } from './DrinksList.styled';

import { useSelector } from 'react-redux';
import {
  selectOwnDrinks,
  selectFavoriteDrinks,
} from 'src/redux/drinks/selectors';
import { selectTheme } from 'src/redux/theme/themeSlice';
import { NotFound } from '../NotFound/NotFound';

export const DrinksList = () => {
  const listOfOwnDrinks = useSelector(selectOwnDrinks);
  const listOfFavoriteDrinks = useSelector(selectFavoriteDrinks);

  let listOfDrinks = [];
  if (location.pathname.includes('/my')) {
    listOfDrinks.push(...listOfOwnDrinks);
  } else if (location.pathname.includes('/favorites')) {
    listOfDrinks.push(...listOfFavoriteDrinks);
  }
  const theme = useSelector(selectTheme);

  return listOfDrinks.length > 0 ? (
    <List theme={theme}>
      {listOfDrinks.map((drink) => (
        <DrinksListItem key={drink._id} drink={drink} />
      ))}
    </List>
  ) : (
    <NotFound message={'Your drinks list is empty'} />
  );
};
