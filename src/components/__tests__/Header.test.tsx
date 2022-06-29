import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header/Header';

describe('DataTable Test', () => {
  const exec = () => {
    return render(<Header />);
  };

  it('should render to screen', async () => {
    expect(await exec()).toBeDefined();
  });
  it('should render a title', async () => {
    const div = await exec().container.querySelector('.custom-header');
    expect(div?.getAttribute('style')).toContain('background:');
  });
});
