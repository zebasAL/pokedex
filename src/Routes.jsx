import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducer';
import Navbar from './components/Navbar';
import HomePage from './containers/HomePage';
import PokemonDetailsView from './containers/PokemonDetailsView';

const store = createStore(rootReducer);

const Routes = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <nav className="navbar">
          <Navbar />
        </nav>

        <div className="main-container">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/:id">
              <PokemonDetailsView />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  </Provider>
);

export default Routes;
