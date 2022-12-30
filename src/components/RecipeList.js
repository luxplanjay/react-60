import PropTypes from 'prop-types';
import { Recipe } from './Recipe';

export const RecipeList = ({ recipes }) => {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      {recipes.map(recipe => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
