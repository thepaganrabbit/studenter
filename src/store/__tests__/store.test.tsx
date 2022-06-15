import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { sample_store } from '../../setupTests';

test('renders learn react link', () => {
  render(<Provider store={sample_store}><div></div></Provider>);
});