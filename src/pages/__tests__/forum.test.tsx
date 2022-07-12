import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { sample_store } from '../../setupTests';
import { Provider } from 'react-redux';
import { theme, ThemeContext } from '../../theme';
import Forum from '../Forum/Forum';

describe('Forum Tests', () => {
  const exec = () => {
    return render(
      <BrowserRouter>
        <ThemeContext.Provider value={theme}>
          <Provider store={sample_store}>
            <Forum />
          </Provider>
        </ThemeContext.Provider>
      </BrowserRouter>,
    );
  };

  it('should render to screen', () => {
    expect(exec()).toBeDefined();
  });
  it('should render the main forum to screen by default', async () => {
    const wrapper = await exec();
    const main_forum = wrapper.container.querySelector('.main-forum');
    expect(main_forum).toBeDefined();
  });
});
