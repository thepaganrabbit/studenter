import { store } from '..';

describe('Store tests - Student_mod', () => {
  it('has message array', () => {
    expect(
      store.getState().assignment_mod.assignments instanceof Array,
    ).toBeTruthy();
  });
});
