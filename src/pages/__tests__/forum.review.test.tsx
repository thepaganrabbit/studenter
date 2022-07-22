import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { sample_store } from '../../setupTests';
import { Provider } from 'react-redux';
import { theme, ThemeContext } from '../../theme';
import ReviewForum from '../Forum/Review/ReviewForum';

describe('Forum -> Review Tests', () => {
  const exec = () => {
    return render(
      <BrowserRouter>
        <ThemeContext.Provider value={theme}>
          <Provider store={sample_store}>
            <ReviewForum />
          </Provider>
        </ThemeContext.Provider>
      </BrowserRouter>,
    );
  };

  it('should render to screen', () => {
    expect(exec()).toBeDefined();
  });
  it('should render the main forum', async () => {
    const wrapper = await exec();
    const main_forum = wrapper.container.querySelector('.review-forum');
    expect(main_forum).toBeDefined();
  });
  it('should render more than one message', async () => {
    const wrapper = await exec();
    const messages = await wrapper.container.querySelectorAll('.drop-block');
    expect(messages.length).toBeGreaterThan(1);
  });
});