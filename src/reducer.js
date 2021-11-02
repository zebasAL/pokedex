const initialState = {
  isShiny: false,
  pokemonsDisplayed: [],
  defaultdisplayedPokemons: [],
};

const rootReducer = (state = initialState, action = { type: '', payload: '' }) => {
  if (action.type === 'SET_IS_SHINY') {
    return { ...state, isShiny: action.payload };
  }
  if (action.type === 'SET_POKEMONS_DISPLAYED') {
    return { ...state, pokemonsDisplayed: action.payload };
  }
  if (action.type === 'SET_DEFAULT_DISPLAYED_POKEMONS') {
    return { ...state, defaultdisplayedPokemons: action.payload };
  }
  return state;
};

export default rootReducer;
