import css from './Statistics.module.css';
import PropTypes from "prop-types";

const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats }) => {
  return (<section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}

    <ul className={css.statList}>
      {stats.map(statElem => (
        <li style={{
          backgroundColor: getRandomColor(),
          width: `calc(100% / ${stats.length})`,
        }}
          key={statElem.id}
          className={css.item}
        >
          <span className={css.label}>{statElem.Mathlabel}</span>
          <span className={css.percentage}>{statElem.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};