import { Models } from '@rematch/core';
import { MUIDataTableColumnDef, MUIDataTableOptions } from 'mui-datatables';
import { ReactElement, ReactNode } from 'react';
import { test_mod } from './store/models/Test.model';
import { student_mod } from './store/models/Student.model';
import { message_mod } from './store/models/Messages.model';
import { assignment_mod } from './store/models/Assignment.model';

// Store
export interface RootModel extends Models<RootModel> {
  test_mod: typeof test_mod;
  student_mod: typeof student_mod;
  message_mod: typeof message_mod;
  assignment_mod: typeof assignment_mod;
}

export type StudentId = string;
export type UserId = string;
export type InstructorId = string;
export type ObjectId = string;
export type date_time = Date | string;
export type pointsystem = number | boolean;

export interface Student {
  firstName: string;
  lastName: string;
  middleInitial: string;
  class: number;
  studentId: StudentId;
  gpa?: number | null;
  fileLink?: string | undefined;
}

export interface CaptureUser {
  fromId: StudentId | InstructorId;
  name: string;
}

export interface Replies {
  from: CaptureUser;
  reply: string;
  date: Date | string;
}

export interface Message {
  _id: ObjectId;
  title: string;
  sender: CaptureUser;
  content: string;
  date: Date | string;
  status: boolean;
  replies: Replies[];
  approved: boolean;
  to?: CaptureUser;
}

export interface Assignment {
  _id: string;
  title: string;
  description: string;
  createdOn: date_time;
  points: pointsystem;
  dueDate?: date_time;
  documents?: string[];
  classId?: string;
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

export interface MessageCardProps extends Message {
  role?: string;
}

export interface AssignmentBlockProps extends Assignment {
  role?: string;
}

export interface BoardProps {
  title: string;
  children?: any;
}

export interface TouchableOpacityProps {
  children: ReactElement;
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
  warningColorLight: string;
  warningColorDark: string;
  warningColorPale: string;
  dangerColorLight: string;
  dangerColorDark: string;
  dangerColorPale: string;
  successColorLight: string;
  successColorDark: string;
  successColorPale: string;
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

export type StatusColors = {
  warning: string;
  success: string;
  danger: string;
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
  getStatusColors(): StatusColors;
}
