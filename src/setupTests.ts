// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import { init } from '@rematch/core';
import '@testing-library/jest-dom';
import { test_mod } from './store/models/Test.model';

export const sample_store = init({
  models: {
    test_mod: {
      state: {
        age: 0,
      },
    },
  },
});
