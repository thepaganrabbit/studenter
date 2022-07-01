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
        title: 'Wondering how it works?',
        sender: { fromId: '334d433', name: 'Andy' },
        to: { fromId: '323423dd', name: 'Sammy' },
        content: 'this is a message from Andy',
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
