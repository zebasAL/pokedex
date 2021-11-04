/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  children,
}) => (
  <div className="pokemon-card-wrapper">
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
