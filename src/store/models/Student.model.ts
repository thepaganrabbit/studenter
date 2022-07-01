import { createModel } from '@rematch/core';
import { RootModel, Student } from '../../types';

type ComplexTestState = {
  students: Student[];
};

export const student_mod = createModel<RootModel>()({
  state: {
    students: [
      {
        firstName: 'Bob',
        lastName: 'Blobly',
        middleInitial: 'C',
        class: 1,
        studentId: '134323',
        gpa: 3.0,
        fileLink: 'FR878',
      },
    ],
  } as ComplexTestState,
  reducers: {},
  effects: () => ({
    // incrementEffect(payload: string) {
    //   dispatch.count.increment(payload);
    // },
  }),
});
