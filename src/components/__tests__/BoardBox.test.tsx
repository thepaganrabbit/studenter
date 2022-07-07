import React from 'react';
import { render } from '@testing-library/react';
import { BoardProps } from '../../types';
import BoardBox from '../BoardBox/BoardBox';

describe('BoardBox Test', () => {
  const exec = (props: BoardProps) => {
    return render(<BoardBox {...props} />);
  };

  it('should render to screen', async () => {
    expect(await exec({ title: 'test', children: <p>hello</p> })).toBeDefined();
  });
  it('should render a h2 with test', async () => {
    const title = await exec({
      title: 'test',
      children: <p>hello</p>,
    }).container.querySelector('h2')?.innerHTML;
    expect(title).toBe('test');
  });
  it('should render a p tag with hello', async () => {
    const title = await exec({
      title: 'test',
      children: <p>hello</p>,
    })
      .container.querySelector('.bb-content')
      ?.querySelector('p')?.innerHTML;
    expect(title).toBe('hello');
  });
});
