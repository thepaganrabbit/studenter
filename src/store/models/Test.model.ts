import { createModel } from '@rematch/core';
import { RootModel } from '../../types';

type ComplexTestState = {
  version: string;
};

export const test_mod = createModel<RootModel>()({
  state: {
    version: '0.0.1',
  } as ComplexTestState,
  reducers: {
    increment(state, payload: string) {
      return {
        version: payload,
      };
    },
  },
  effects: (dispatch) => ({
    incrementEffect(payload: string) {
      dispatch.count.increment(payload);
    },
  }),
});
