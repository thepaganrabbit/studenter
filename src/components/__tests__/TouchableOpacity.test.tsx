import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { TouchableOpacityProps } from '../../types';
import TouchableOpacityBtn from '../TouchableOpacityBtn/TouchableOpacityBtn';

describe('TouchableOpacityBtn Test', () => {
  const exec = (props: TouchableOpacityProps) => {
    return render(<TouchableOpacityBtn {...props} />);
  };

  it('should render to screen', async () => {
    expect(await exec({ onClick: jest.fn(), children: <p>hello</p> })).toBeDefined();
  });
  it('should render a p with hello', async () => {
    const button = await exec({
      children: <p>hello</p>,
      onClick: jest.fn(),
    }).container.querySelector('.touchable-opacity');
    expect(button?.querySelector('p')?.innerHTML).toBe('hello');
  });
  it('should call mock on click', async () => {
    const mock = jest.fn();
    const button = (await exec({
      children: <p>hello</p>,
      onClick: mock,
    }).container.querySelector('.touchable-opacity')) as HTMLButtonElement;
    fireEvent.click(button);
    expect(mock).toHaveBeenCalled();
  });
});
