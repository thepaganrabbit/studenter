import { createModel } from '@rematch/core';
import { Message, RootModel } from '../../types';
import { MessageService } from '../services/Messages.service';

type ComplexTestState = {
  messages: Message[];
};

export const message_mod = createModel<RootModel>()({
  state: {
    messages: [],
  } as ComplexTestState,
  reducers: {
    allMessages(state, payload: Message[]) {
      return {
        messages: payload,
      };
    },
  },
  effects: (dispatch) => ({
    async getMessages() {
      const service = new MessageService();
      const { data } = await service.GET();
      dispatch.message_mod.allMessages(data as Message[]);
    },
    async getPersonalMessages(userId: string) {
      const service = new MessageService();
      const { data } = await service.GET<string>({
        data: userId,
        type: 'private',
      });
      dispatch.message_mod.allMessages(data as Message[]);
    },
    async getMessagesToReview(userId: string) {
      const service = new MessageService();
      const { data } = await service.GET<string>({
        data: userId,
        type: 'review',
      });
      dispatch.message_mod.allMessages(data as Message[]);
    },
  }),
});
