import { store } from '..';

describe('Store tests - Student_mod', () => {
  it('has message array', () => {
    expect(store.getState().message_mod.messages instanceof Array).toBeTruthy();
  });
});
