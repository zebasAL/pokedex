import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toast';
import Card from '../components/Card';
import api from '../api';
import { mockPokemonData, mockPokemonSpecies } from '../mockedData';
import MinimalPokemonCard from '../components/ui/MinimalPokemonCard';
import Divider from '../components/ui/Divider';
import ProgressBar from '../components/ui/ProgressBar';
import maxStat from '../helpers';

const PokemonDetailsView = () => {
  const [pokemon, setPokemon] = useState({ ...mockPokemonData });
  const [pokemonSpecie, setPokemonSpecie] = useState({ ...mockPokemonSpecies });
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const [pokemonDescription] = pokemonSpecie.flavor_text_entries.filter((specie) => specie.language.name === 'en');

  const getPokemonSpecies = () => {
    api.getPokemonSpecies(id)
      .then((response) => {
        setPokemonSpecie(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getPokemon = () => {
    api.getPokemon(id)
      .then((response) => {
        setPokemon(response.data);
        setIsLoading(false);
      })
      .catch(() => {
        toast.warn('We could not get your pokemon');
      });
  };

  useEffect(() => {
    getPokemon();
    getPokemonSpecies();
  }, []);

  return (
    <div className="pokemon-details-view-container">
      {(isLoading)
        ? <div className="loader">Loading...</div>
        : (
          <Card>
            <MinimalPokemonCard
              pokemon={pokemon}
              pokemonDescription={pokemonDescription.flavor_text}
            />
            <div>
              <Divider label="STATS" />
              <div className="pokemon-card-stats">
                {
                    pokemon.stats.map((stat) => (
                      <div key={stat.stat.name}>
                        <ProgressBar
                          percentage={maxStat(stat)}
                          progressValue={stat.base_stat}
                          label={stat.stat.name.toUpperCase()}
                        />
                      </div>
                    ))
                  }
              </div>
            </div>
          </Card>
        )}
    </div>
  );
};

export default PokemonDetailsView;
