import { useSelector } from 'react-redux';
import {
  AnyCocktail,
  Description,
  Recipe,
  Title,
  Thumb,
} from './RecipePreparation.styled';
import anyCocktail from 'src/images/any-cocktail.jpg';
import { selectTheme } from 'src/redux/theme/themeSlice';

const RecipePreparation = ({ drinkDetails }) => {
  const { description, instructions } = drinkDetails;
  const theme = useSelector(selectTheme);

  return (
    <>
      <Title theme={theme}>Recipe Preparation</Title>
      <Recipe>
        <div>
          <Description theme={theme}>{description}</Description>
          <Description theme={theme}>{instructions}</Description>
        </div>
        <Thumb>
          <AnyCocktail
            src={anyCocktail}
            alt="Any Cocktail"
            loading="lazy"
            width={335}
            height={430}
          />
        </Thumb>
      </Recipe>
    </>
  );
};

export default RecipePreparation;
