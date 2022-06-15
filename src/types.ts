import { Models } from '@rematch/core';
import { test_mod } from './store/models/Test.model';

export interface RootModel extends Models<RootModel> {
  test_mod: typeof test_mod;
}
