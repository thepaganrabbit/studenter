import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';

describe('Home Tests', () => {
  const exec = () => {
    return render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
  };
  it('should render to screen', () => {
    expect(exec()).toBeDefined();
  });

  it('should render a link', async () => {
    const link = await exec().container.querySelector('a');
    expect(link?.innerHTML).toBe('Home');
  });
  it('should render a p', async () => { 
    const p = await exec().container.querySelector('p')?.innerHTML;
    expect(p).toBeDefined();
   })
});
