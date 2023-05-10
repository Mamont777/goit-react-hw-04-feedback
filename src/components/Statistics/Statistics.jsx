import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={css.statisticsList}>
    <li className={css.statisticsList__item}>Good: {good}</li>
    <li className={css.statisticsList__item}>Neutral: {neutral}</li>
    <li className={css.statisticsList__item}>Bad: {bad}</li>
    <li className={css.statisticsList__item}>Total: {total}</li>
    <li className={css.statisticsList__item}>
      Positive feedback: {positivePercentage}%
    </li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
