import React from 'react';
import { render } from '@testing-library/react';
import DataTable from '../DataTable';
import { DataTableProps } from '../../types';

describe('DataTable Test', () => {
  const sampleProps: DataTableProps = {
    data: [],
    columns: [],
    title: 'test',
  };
  const exec = (props: DataTableProps) => {
    return render(<DataTable {...props} />);
  };

  beforeEach(() => {
    console.error = jest.fn();
  });
  it('should render to screen', async () => {
    expect(await exec(sampleProps)).toBeDefined();
  });
  it('should render a title', async () => {
    expect(await exec(sampleProps).container.querySelector('h6')?.innerHTML).toBe('test');
  });
});
