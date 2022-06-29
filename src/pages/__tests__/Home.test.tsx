import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import { sample_store } from '../../setupTests';
import { Provider } from 'react-redux';
import { theme, ThemeContext } from '../../theme';

describe('Home Tests', () => {
  const exec = () => {
    return render(
      <BrowserRouter>
        <ThemeContext.Provider value={theme}>
          <Provider store={sample_store}>
            <Home />
          </Provider>
        </ThemeContext.Provider>
      </BrowserRouter>,
    );
  };

  it('should render to screen', () => {
    expect(exec()).toBeDefined();
  });
});
