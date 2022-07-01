import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ButtonProps } from '../../types';
import { Provider } from 'react-redux';
import MessageBoard from '../MessageBoard/MessageBoard';
import { theme, ThemeContext } from '../../theme';
import { sample_store } from '../../setupTests';

describe('MessageBoard Test', () => {
  const exec = () => {
    return render(
      <ThemeContext.Provider value={theme}>
        <Provider store={sample_store}>
          <MessageBoard />
        </Provider>
      </ThemeContext.Provider>,
    );
  };

  it('should render to screen', async () => {
    expect(await exec()).toBeDefined();
  });
  it('renders the message board to the screen', async () => {
    const msgBrd = await exec().container.querySelector('.message-container');
    expect(msgBrd).toBeDefined();
  });
  it('renders the message card to the screen', async () => {
    const msgBrd = await exec().container.querySelectorAll('.msg-box');
    expect(msgBrd.length).toBeGreaterThan(1);
  });
  it('renders the message card with a title that matches sample data', async () => {
    const msgBrd = await exec().container.querySelectorAll('.msg-box');
    expect(await msgBrd[0].querySelector('.card-header-title')?.innerHTML).toBe(
      sample_store.getState().message_mod.messages[0].title,
    );
  });
});
