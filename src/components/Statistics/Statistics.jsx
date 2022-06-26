import PropTypes from 'prop-types';

export const Statistics = ({ title, dataStats }) => {
  return (
    <section className="statistics">
      {title ? <h2>{title}</h2> : null}
      <ul className="stat-list">
        {dataStats.map(({ id, label, percentage }) => (
          <li className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  dataStats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
