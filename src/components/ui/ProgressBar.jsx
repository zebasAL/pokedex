import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({
  percentage,
  progressValue,
  label,
}) => (
  <div className="progress-bar-container">
    <div className="progress-bar-label">{label}</div>
    <div className="progress-bar-wrapper">
      <div style={{ width: `${percentage}%` }} className="progress-bar" />
      <p className="progress-value">{progressValue}</p>
    </div>
  </div>
);

ProgressBar.propTypes = {
  percentage: PropTypes.string,
  label: PropTypes.string,
  progressValue: PropTypes.number,
};

ProgressBar.defaultProps = {
  percentage: 0,
  label: '',
  progressValue: 0,
};

export default ProgressBar;
