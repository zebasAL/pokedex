import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PokemonSmallCard = ({
  isShiny,
  pokemon,
  pokemonDescription,
}) => (
  <div className="pokemons-wrapper">
    <div key={pokemon.id} className="pokemon-details">
      <Link to={`/${pokemon.id}`}>
        { isShiny === true
          ? <img alt="pokemon" src={pokemon.sprites.front_shiny} />
          : <img alt="pokemon" src={pokemon.sprites.front_default} />}
        <div className="pokemon-card-info">
          <p id="pokemon-card-id">
            #
            {String(pokemon.id).padStart(4, 0)}
          </p>
          <p id="pokemon-card-name">{pokemon.name}</p>
          <p id="pokemon-card-height">
            {`Height :
                ${pokemon.height / 10}
                m
                `}
          </p>
          <p id="pokemon-card-weight">
            {`Weight :
                ${(pokemon.weight * 0.01).toFixed()}
                kg
                `}
          </p>
        </div>
      </Link>
    </div>
    <p className="pokemon-card-description">
      {pokemonDescription}
    </p>
  </div>
);

PokemonSmallCard.propTypes = {
  pokemonDescription: PropTypes.string,
  isShiny: PropTypes.bool,
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    weight: PropTypes.number,
    height: PropTypes.number,
    name: PropTypes.string,
    sprites: PropTypes.shape({
      front_shiny: PropTypes.string,
      front_default: PropTypes.string,
    }),
  }),
};

PokemonSmallCard.defaultProps = {
  pokemon: {
    id: 0,
    weight: 0,
    height: 0,
    name: '',
    sprites: {
      front_shiny: '',
      front_default: '',
    },
  },
  isShiny: false,
  pokemonDescription: '',
};

const mapStateToProps = (state) => ({ isShiny: state.isShiny });

export default connect(mapStateToProps, null)(PokemonSmallCard);
