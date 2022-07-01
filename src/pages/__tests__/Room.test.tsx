import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { sample_store } from '../../setupTests';
import { Provider } from 'react-redux';
import { theme, ThemeContext } from '../../theme';
import Room from '../Room/Room';

describe('Home Tests', () => {
  const exec = () => {
    return render(
      <BrowserRouter>
        <ThemeContext.Provider value={theme}>
          <Provider store={sample_store}>
            <Room />
          </Provider>
        </ThemeContext.Provider>
      </BrowserRouter>,
    );
  };
  beforeEach(() => {
    
  });
  it('should render to screen', () => {
    expect(exec()).toBeDefined();
  });
  it('should render a data table', async () => {
    const table = await exec().findByLabelText('Table Toolbar');
    expect(table).toBeDefined();
  });
  it('should render a data table', async () => {
    const messageBoard = await exec().container.querySelector('.message-board');
    expect(messageBoard).toBeDefined();
  });
});
