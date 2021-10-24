import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Routes from './routes';

function App() {
  return (
    <>
      <BrowserRouter basename="gostack_github_explorer">
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
