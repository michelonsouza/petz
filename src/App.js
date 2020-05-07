import React from 'react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/global';
import Routes from './routes';
import { Header, Footer } from './components';

import history from './services/history';
import light from './styles/themes/light';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <ToastContainer />
      <Router history={history}>
        <Header />
        <Routes />
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
