import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { sample_store } from '../../setupTests';
import { Provider } from 'react-redux';
import { theme, ThemeContext } from '../../theme';
import Home from '../../pages/Home/Home';

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
  beforeEach(() => {
    console.error = jest.fn();
  })
  it('should render to screen', () => {
    expect(exec()).toBeDefined();
  });
  it('should render header and sidenav', async () => {
    const home = await exec().container;
    expect(home.querySelector('.custom-header')).toBeDefined();
    expect(home.querySelector('.side-nav')).toBeDefined();
  });
});