import React from 'react';
import { Router } from 'react-router-dom';
import { AuthContextProvider } from './Context/context';

import { GlobalStyle } from './styles/global';

import Routes from './routes/routes';
import history from './history';

function App() {
  return (
    <AuthContextProvider>
      <Router history={history}> 
        <Routes />
        <GlobalStyle />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
