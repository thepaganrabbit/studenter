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
});
