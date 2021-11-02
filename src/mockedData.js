export const mockPokemonData = {
  id: 1,
  name: 'bulbasaur',
  stats: [{ base_stat: 45, effort: 0, stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' } },
    { base_stat: 49, effort: 0, stat: { name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/' } },
    { base_stat: 49, effort: 0, stat: { name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/' } },
    { base_stat: 65, effort: 1, stat: { name: 'special-attack', url: 'https://pokeapi.co/api/v2/stat/4/' } },
    { base_stat: 65, effort: 0, stat: { name: 'special-defense', url: 'https://pokeapi.co/api/v2/stat/5/' } },
    { base_stat: 45, effort: 0, stat: { name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/' } }],
  types: [{ slot: 1, type: { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' } }, { slot: 2, type: { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' } }],
  sprites: {
    front_shiny: 'xxx',
    front_default: 'xxxxxx',
  },
};

export const mockPokemonSpecies = {
  flavor_text_entries: [{ flavor_text: '', language: { name: 'en' } }],
};
