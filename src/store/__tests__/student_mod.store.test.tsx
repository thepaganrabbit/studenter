import { store } from '..';

describe('Store tests - Student_mod', () => {
  it('has student array', () => {
    expect(store.getState().student_mod.students instanceof Array).toBeTruthy();
  });
});
