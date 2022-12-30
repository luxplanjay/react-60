import PropTypes from 'prop-types';
import { BsAlarm } from 'react-icons/bs';
import { HiOutlineChartPie, HiOutlineChartBar } from 'react-icons/hi';

export const Recipe = ({
  recipe: { name, image, time, servings, calories },
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} width="240" />
      <div>
        <p>
          <BsAlarm /> {time} min
        </p>
        <p>
          <HiOutlineChartPie /> {servings} servings
        </p>
        <p>
          <HiOutlineChartBar /> {calories} calories
        </p>
      </div>
      <div>
        <h3>Difficulty</h3>
        <div>
          <span>Easy</span>
          <span>Medium</span>
          <span>Hard</span>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']),
  }).isRequired,
};
