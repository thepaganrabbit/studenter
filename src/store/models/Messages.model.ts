import { createModel } from '@rematch/core';
import { format } from 'date-fns';
import { Message, RootModel } from '../../types';

type ComplexTestState = {
  messages: Message[];
};

export const message_mod = createModel<RootModel>()({
  state: {
    messages: [
      {
        _id: '344rd',
        title: 'Wondering how it works?',
        sender: { fromId: '334d433', name: 'Andy' },
        to: { fromId: '323423dd', name: 'Sammy' },
        content: 'this is a message from Andy',
        date: format(new Date(), 'yyyy/dd/MM'),
        status: false,
        approved: true,
        replies: [],
      },
      {
        _id: '344rdd',
        title: 'Age of I-9?',
        sender: { fromId: '334d433', name: 'Andy' },
        to: { fromId: '323423dd', name: 'Sammy' },
        content: 'What is the age range for i=9 travel form?',
        date: format(new Date(), 'yyyy/dd/MM'),
        status: false,
        approved: true,
        replies: [
          {
            _id: 'uurue',
            from: {
              name: 'Jack Smith',
              userId: '1222323',
            },
            reply: 'Around 18 but 75 has limits too.',
            date: format(new Date(), 'yyyy/dd/MM'),
          },
          {
            _id: 'uu3rue',
            from: {
              name: 'Tommy Leru',
              userId: '1222323',
            },
            reply: '20-70 with no limits > limits apply.',
            date: format(new Date(), 'yyyy/dd/MM'),
          },
        ],
      },
      {
        _id: '34dfrd',
        title: 'Pressure and Strength?',
        sender: { fromId: '334d433', name: 'Andy' },
        to: { fromId: '323423dd', name: 'Sammy' },
        content: 'How is grip related to standard pressure of hand?',
        date: format(new Date(), 'yyyy/dd/MM'),
        status: false,
        approved: true,
        replies: [],
      },
      {
        _id: '344rdsd',
        title: 'Time?',
        sender: { fromId: '334d433', name: 'Andy' },
        to: { fromId: '323423dd', name: 'Sammy' },
        content: 'What time is class on Wednesday?',
        date: format(new Date(), 'yyyy/dd/MM'),
        status: false,
        approved: false,
        replies: [],
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
