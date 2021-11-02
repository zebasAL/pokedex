import React from 'react';
import { ToastContainer } from 'react-toast';
import Routes from './Routes';

const App = () => (
  <div>
    <ToastContainer delay={3500} position="top-center" />
    <Routes />
  </div>
);

export default App;
