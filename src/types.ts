import { Models } from '@rematch/core';
import { MUIDataTableColumnDef, MUIDataTableOptions } from 'mui-datatables';
import { ReactElement, ReactNode } from 'react';
import { test_mod } from './store/models/Test.model';

export interface RootModel extends Models<RootModel> {
  test_mod: typeof test_mod;
}

export type PropsBase = {
  children: ReactElement[] | ReactNode[] | ReactElement | ReactNode;
};

export interface DataTableProps {
  title: string;
  data: any;
  columns: MUIDataTableColumnDef[];
  options?: MUIDataTableOptions;
}

export interface ColorProfile {
  origin: string;
  tint?: string;
  shade?: string;
}

export interface Colors {
  primary: ColorProfile;
  secondary: ColorProfile;
  tertiary: ColorProfile;
}

export enum ModeSelect {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
  PALE = 'PALE',
}

export interface DarkMode {
  backgroundDark: string;
  textColorDark: string;
}

export interface LightMode {
  backgroundLight: string;
  textColorLight: string;
}

export interface PaleMode {
  backgroundPale: string;
  textColorPale: string;
}

export type ThemeBuilderProps = {
  colors: Colors;
  backgroundDark: string;
  backgroundLight: string;
  backgroundPale: string;
  textColorLight: string;
  textColorDark: string;
  textColorPale: string;
  tintColorLight: string;
  tintColorDark: string;
  tintColorPale: string;
  highlight: string;
  tint: string;
  mode: ModeSelect;
};

export type Backgrounds = {
  backgroundDark: string;
  backgroundLight: string;
  backgroundPale: string;
};

export type TextColors = {
  textColorDark: string;
  textColorLight: string;
  textColorPale: string;
};

export interface Theming {
  setMode(mode: ModeSelect): void;
  getMode(): string;
  getBackgrounds(): Backgrounds;
  getHighlight(): string;
  getColors(): Colors;
  setCurrentBackground(background: string): void;
  getCurrentBackground(): string;
  getBackgroundColor(): string;
  getTextColor(): string;
  getTint(): string;
}
