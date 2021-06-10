import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import 'modern-normalize/modern-normalize.css';
import './styles/main.scss';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={store.persistor}>
      <Provider store={store.store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </PersistGate>
  </React.StrictMode>,
  document.getElementById('root'),
);
