import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { sample_store } from './setupTests';
import { BrowserRouter } from 'react-router-dom';
import { theme, ThemeContext } from './theme';

test('renders learn react link', () => {
    // handle dumb css parse issue todo: fix
    console.error = jest.fn();
  render(
    <BrowserRouter>
      <ThemeContext.Provider value={theme}>
        <Provider store={sample_store}>
          <App />
        </Provider>
      </ThemeContext.Provider>
    </BrowserRouter>,
  );
});
