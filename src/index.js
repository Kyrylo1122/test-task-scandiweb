import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Provider } from 'react-redux';
import { store, persist } from './components/Redux/Store';
import { PersistGate } from 'redux-persist/integration/react';
import { getTotal } from './components/Redux/CartSlice';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

store.dispatch(getTotal());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persist}>
          <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </ApolloProvider>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
// basename = '/test-task-scandiweb/';
