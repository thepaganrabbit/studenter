import { Models } from '@rematch/core';
import { MUIDataTableColumnDef, MUIDataTableOptions } from 'mui-datatables';
import { ReactElement, ReactNode } from 'react';
import { test_mod } from './store/models/Test.model';

// Store
export interface RootModel extends Models<RootModel> {
  test_mod: typeof test_mod;
}

// Component Props
export type PropsBase = {
  children: ReactElement[] | ReactNode[] | ReactElement | ReactNode;
};

export interface DataTableProps {
  title: string;
  data: any;
  columns: MUIDataTableColumnDef[];
  options?: MUIDataTableOptions;
}

export interface ButtonProps {
  children: string;
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

// Theming
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

export interface ColorsByMode {
  background: string;
  text: string;
  tint: string;
  complementary: string;
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
  complimentaryColorLight: string;
  complementaryColorDark: string;
  complementaryColorPale: string;
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
  getComplementaryColors(): string;
  getColorsByMode(): ColorsByMode;
}
