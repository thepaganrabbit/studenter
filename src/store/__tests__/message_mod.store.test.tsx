import { store } from '..';

describe('Store tests - Message_mod', () => {
  it('has message array', () => {
    expect(store.getState().message_mod.messages instanceof Array).toBeTruthy();
  });
});
