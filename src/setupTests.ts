// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import { init } from '@rematch/core';
import '@testing-library/jest-dom';

export const sample_store = init({
  models: {
    test_mod: {
      state: {
        age: 0,
      },
    },
    student_mod: {
      state: {
        students: [
          {
            firstName: 'Bob',
            lastName: 'Blobly',
            middleInitial: 'C',
            class: 1,
            id: '134323',
            gpa: 3.0,
            fileLink: 'FR878',
          },
        ],
      },
    },
  },
});
