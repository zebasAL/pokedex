import React from 'react';
import {
  render,
  screen,
  cleanup,
  act,
  waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import rootReducer from '../reducer';
import PokemonDetailsView from './PokemonDetailsView';
import { mockPokemonSpecies, mockPokemonData } from '../mockedData';

afterEach(cleanup);

const store = createStore(rootReducer);

jest.mock('react-router-dom', () => ({
  // this line makes sure jest will not override every module because we need to import router
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: 1,
  }),
}));

jest.mock('../api', () => ({
  // For default exported modules
  __esModule: true,
  default: {
    getPokemon: () => Promise.resolve({
      data: { ...mockPokemonData },
    }),
    getPokemonSpecies: () => Promise.resolve({
      data: {
        ...mockPokemonSpecies,
      },
    }),
  },
}));

describe('Pokemon Details', () => {
  it('renders PokemonDetailsView and handles events', async () => {
    act(() => {
      render(
        <Provider store={store}>
          <Router>
            <PokemonDetailsView />
          </Router>
        </Provider>
        ,
      );
    });

    await waitFor(() => {
      screen.getByText((content) => (
        content.includes('bulbasaur')
      ));
    });
  });
});
