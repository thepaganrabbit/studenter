import { createModel } from '@rematch/core';
import { format } from 'date-fns';
import { Message, RootModel, Assignment } from '../../types';

type ComplexTestState = {
  assignments: Assignment[];
};

export const assignment_mod = createModel<RootModel>()({
  state: {
    assignments: [
      {
        _id: '344df',
        title: 'Methods Of Distraction',
        description: 'How does one distract a person - METHODS',
        points: 3,
        createdOn: format(new Date(), 'yyyy/dd/MM'),
        dueDate: format(new Date('09/13/2022'), 'yyyy/dd/MM'),
        documents: [],
        classId: '445tg5rt4',
      },
      {
        _id: '34d4df',
        title: 'Methods Of Hypnosis',
        description:
          'Distraction is a type of hypnosis, confusion and missunderstanding - Mind Control',
        points: true,
        createdOn: format(new Date(), 'yyyy/dd/MM'),
        dueDate: format(new Date('09/11/2022'), 'yyyy/dd/MM'),
        documents: [],
        classId: '445tg5rt4',
      },
      {
        _id: '344df',
        title: 'Methods Of Distraction',
        description: 'How does one distract a person - METHODS',
        points: 3,
        createdOn: format(new Date(), 'yyyy/dd/MM'),
        dueDate: format(new Date('09/13/22'), 'yyyy/dd/MM'),
        documents: [],
        classId: '445tg5rt4',
      },
    ],
  } as unknown as ComplexTestState,
  reducers: {},
  effects: () => ({
    // incrementEffect(payload: string) {
    //   dispatch.count.increment(payload);
    // },
  }),
});
