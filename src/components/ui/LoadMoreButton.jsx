import React from 'react';
import PropTypes from 'prop-types';
import { down } from '../../css-props';

const LoadMoreButton = ({
  handleLoadingButton,
  isLoading,
}) => (
  <>
    {
    (isLoading)
      ? (
        (
          <div className="loader">Loading...</div>
        )
      )
      : (
        <button className="load-more-pokemons-button" onClick={() => handleLoadingButton()} type="button">
          <i style={down} className="arrow" />
        </button>
      )
    }
  </>
);

LoadMoreButton.propTypes = {
  handleLoadingButton: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

LoadMoreButton.defaultProps = {
  isLoading: true,
};

export default LoadMoreButton;
