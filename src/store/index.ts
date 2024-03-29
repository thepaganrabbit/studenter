import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import { RootModel } from '../types';
import { models } from './models/RootModel';

export const store = init({
  models,
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
