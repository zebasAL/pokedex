import React from 'react';
import PropTypes from 'prop-types';

const AutoCompleteField = ({
  searchValue,
  setSearchValue,
  handleEnter,
}) => (
  <div className="input-container">
    <input
      className="autocomplete-input-field"
      type="text"
      placeholder="Search"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      onKeyDown={(e) => ((e.key === 'Enter') && handleEnter(e))}
    />
  </div>
);

AutoCompleteField.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  handleEnter: PropTypes.func,
};

AutoCompleteField.defaultProps = {
  handleEnter: () => {},
};

export default AutoCompleteField;
