import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import axios from 'axios';

import GlobalStyle from './GlobalStyle';
import { store } from './app/store'; 
import Container from './components/Container/Container';
import { TournamentList } from './components/TournamentList/TournamentList';


const App: React.FC = () => {
  // useEffect(() => {
  //   axios.get()
  // },[]);
  return (
    <Container>
      <TournamentList />
    </Container>
  );
};

const container = document.getElementById('root');
if (!container) {
  throw new Error('No container found');
}
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);
