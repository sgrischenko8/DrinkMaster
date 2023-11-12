import { useSelector } from 'react-redux';
import {
  ImageIngredient,
  ItemIngredient,
  ListIngredient,
  AllTitleIngredients,
  DescriptionIngredient,
  TitleIngredient,
  MeasureIngredien,
} from './DrinkIngredientsList.styled';
import drinkDummyImage from 'src/images/dummyDrinkThumb.png';
import { selectTheme } from 'src/redux/theme/themeSlice';

const DrinkIngredientsList = ({ drinkDetails }) => {
  const { ingredients } = drinkDetails;
  const theme = useSelector(selectTheme);

  return (
    <>
      <AllTitleIngredients theme={theme}>Ingredient</AllTitleIngredients>
      <ListIngredient>
        {ingredients?.map(
          ({ ingredientId, title, measure, ingredientThumb }) => (
            <ItemIngredient key={ingredientId}>
              <ImageIngredient
                src={ingredientThumb}
                alt={title}
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.src = drinkDummyImage;
                }}
              />
              <DescriptionIngredient>
                <TitleIngredient theme={theme}>{title}</TitleIngredient>
                <MeasureIngredien theme={theme}>{measure}</MeasureIngredien>
              </DescriptionIngredient>
            </ItemIngredient>
          ),
        )}
      </ListIngredient>
    </>
  );
};

export default DrinkIngredientsList;
