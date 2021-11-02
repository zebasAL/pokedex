/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const PokemonFullCard = ({
  children,
}) => (
  <div className="pokemon-card-wrapper">
    {children}
  </div>
);

PokemonFullCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PokemonFullCard;
