import React from 'react';
import { store } from '../index';

describe('Store tests - Test_mod', () => {
  it('has a version number', () => {
    expect(store.getState().test_mod.version).toContain('1');
  });
  it('should incriment version', () => {
    store.dispatch.test_mod.incrementEffect('0.0.2');
    expect(store.getState().test_mod.version).toContain('2');
  });
  it('should incriment version', () => {
    const mock = jest.fn();
    (store.dispatch.test_mod.increment as unknown as jest.Mock) = mock;
    store.dispatch.test_mod.incrementEffect('0.0.2');
    expect(mock).toHaveBeenCalled();
  });
});

