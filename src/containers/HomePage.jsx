/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toast';
import LoadMoreButton from '../components/ui/LoadMoreButton';
import MinimalPokemonCard from '../components/ui/MinimalPokemonCard';
import AutoCompleteField from '../components/ui/AutoCompleteField';
import api from '../api';

const HomePage = ({
  pokemonsDisplayed,
  setPokemonsDisplayed,
  setDefaultdisplayedPokemons,
  defaultdisplayedPokemons,
}) => {
  const [numberOfPokemonsDisplayed, setNumberOfPokemonsDisplayed] = useState(20);
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const getPokemonDetails = (pokemons) => {
    Promise.all(pokemons.map((pokemon) => axios.get(`${pokemon.url}`)))
      .then((responses) => {
        let listOfPokemons = [];
        listOfPokemons = (responses.map((response) => response.data));
        setPokemonsDisplayed(listOfPokemons);
        setDefaultdisplayedPokemons(listOfPokemons);
        setIsLoading(false);
        setIsMounted(true);
      })
      .catch((err) => {
        toast.warn('We could not get your pokemons details');
      });
  };

  const getPokemons = () => {
    api.getPokemons(numberOfPokemonsDisplayed)
      .then((response) => {
        getPokemonDetails(response.data.results);
      })
      .catch(() => {
        toast.warn('We could not get your pokemons');
      });
  };

  /**
   * Gets the searched pokemon
   * @returns {void}
   */
  const handleEnter = () => {
    setIsMounted(false);
    if (searchValue !== '') {
      setIsLoading(true);
      api.searchPokemon(searchValue)
        .then((response) => {
          setPokemonsDisplayed([response.data]);
          setIsMounted(true);
          setIsLoading(false);
        })
        .catch(() => {
          toast.error('that pokemon is not in this pokedex go and catch it');
          setIsMounted(true);
          setIsLoading(false);
        });
    } else {
      setPokemonsDisplayed(defaultdisplayedPokemons);
      setIsMounted(true);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getPokemons();
  }, [numberOfPokemonsDisplayed]);

  return (
    <div className="cards-display details-off">
      <AutoCompleteField
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleEnter={handleEnter}
      />
      <div className="hidden" />
      {isMounted
        ? (
          <>
            <div className="pokemons-cards-container">
              {pokemonsDisplayed.map((pokemon) => (
                <MinimalPokemonCard key={pokemon.id} pokemon={pokemon} />
              ))}
            </div>
          </>
        )
        : null}
      <LoadMoreButton
        handleLoadingButton={
          (() => setNumberOfPokemonsDisplayed(numberOfPokemonsDisplayed + 20))
        }
        isLoading={isLoading}
      />
    </div>
  );
};

HomePage.propTypes = {
  setDefaultdisplayedPokemons: PropTypes.func,
  pokemonsDisplayed: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    sprites: PropTypes.shape({
      front_shiny: PropTypes.string,
      front_default: PropTypes.string,
    }).isRequired,
  })),
  setPokemonsDisplayed: PropTypes.func,
  defaultdisplayedPokemons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    sprites: PropTypes.shape({
      front_shiny: PropTypes.string,
      front_default: PropTypes.string,
    }),
  })).isRequired,
};

HomePage.defaultProps = {
  pokemonsDisplayed: [],
  setPokemonsDisplayed: () => {},
  setDefaultdisplayedPokemons: () => {},
};

const mapStateToProps = (state) => (
  {
    pokemonsDisplayed: state.pokemonsDisplayed,
    defaultdisplayedPokemons: state.defaultdisplayedPokemons,
  });

const mapDispatchToProps = (dispatch) => ({
  setPokemonsDisplayed: (values) => dispatch({
    type: 'SET_POKEMONS_DISPLAYED',
    payload: values,
  }),
  setDefaultdisplayedPokemons: (values) => dispatch({
    type: 'SET_DEFAULT_DISPLAYED_POKEMONS',
    payload: values,
  }),
});

export default connect((mapStateToProps), mapDispatchToProps)(HomePage);
