import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { theme, ThemeContext } from '../../theme';
import { sample_store } from '../../setupTests';
import AssignmentBoard from '../AssignmentBoard/AssignmentBoard';

describe('AssignmentBoard Test', () => {
  const exec = () => {
    return render(
      <ThemeContext.Provider value={theme}>
        <Provider store={sample_store}>
          <AssignmentBoard />
        </Provider>
      </ThemeContext.Provider>,
    );
  };

  it('should render to screen', async () => {
    expect(await exec()).toBeDefined();
  });
  it('renders the board box to the screen', async () => {
    const assiBrd = await exec().container.querySelector('.board-box');
    expect(assiBrd).toBeDefined();
  });
  it('renders the Assignment Block to the screen', async () => {
    const assiBrd = await exec().container.querySelectorAll(
      '.assingment-block',
    );
    expect(assiBrd.length).toBeGreaterThan(1);
  });
});
