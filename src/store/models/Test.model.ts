import { createModel } from "@rematch/core";
import { RootModel } from "../../types";

type ComplexTestState = {
  name: string;
  age: number;
};

export const test_mod = createModel<RootModel>()({
  state: {
    name: "",
    age: 33,
  } as ComplexTestState,
  reducers: {
    increment(state, payload: number) {
      return {
        name: "",
        age: payload,
      };
    },
  },
  effects: (dispatch) => ({
    incrementEffect(payload: number, rootState) {
      dispatch.count.increment(payload);
    },
  }),
});
