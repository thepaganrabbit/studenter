import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Button from '../Button/Button';
import { ButtonProps } from '../../types';

describe('Button Test', () => {
  const exec = (props: ButtonProps) => {
    return render(<Button {...props} />);
  };

  it('should render to screen', async () => {
    expect(await exec({ children: 'hello', onClick: jest.fn() })).toBeDefined();
  });
  it('should render a buttons text', async () => {
    const button = await exec({
      children: 'hello',
      onClick: jest.fn(),
    }).container.querySelector('button');
    expect(button?.innerHTML).toBe('hello');
  });
  it('should call mock on click', async () => {
    const mock = jest.fn();
    const button = (await exec({
      children: 'hello',
      onClick: mock,
    }).container.querySelector('button')) as HTMLButtonElement;
    fireEvent.click(button);
    expect(mock).toHaveBeenCalled();
  });
});
