import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { sample_store } from './setupTests';
import { BrowserRouter } from 'react-router-dom';

test('renders learn react link', () => {
  render(
    <BrowserRouter>
      <Provider store={sample_store}>
        <App />
      </Provider>
    </BrowserRouter>,
  );
});
