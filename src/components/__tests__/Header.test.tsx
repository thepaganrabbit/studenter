import React from 'react';
import { render } from '@testing-library/react';
import { HeaderProps } from '../../types';
import Header from '../Header/Header';

describe('DataTable Test', () => {
  const exec = (props?: HeaderProps) => {
    return render(<Header {...props} />);
  };

  beforeEach(() => {
    console.error = jest.fn();
  });
  it('should render to screen', async () => {
    expect(await exec()).toBeDefined();
  });
  it('should render a title', async () => {
    const div = await exec({color: 'blue'}).container.querySelector('.custom-header');
    expect(div?.getAttribute('style')).toBe('background: blue;');
  });
});