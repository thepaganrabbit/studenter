import { Models } from '@rematch/core';
import { MUIDataTableColumnDef, MUIDataTableOptions } from 'mui-datatables';
import { ReactElement, ReactNode } from 'react';
import { test_mod } from './store/models/Test.model';
import { student_mod } from './store/models/Student.model';
import { message_mod } from './store/models/Messages.model';
import { assignment_mod } from './store/models/Assignment.model';
import { AxiosResponse } from 'axios';

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
  userId: StudentId | InstructorId;
  name: string;
}

export interface Replies {
  _id?: string;
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
  isPrivate?: boolean;
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

export interface MessageProps extends Message {
  role?: string;
  isMessagePage?: boolean;
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

// Enum
export enum ForumTabEnum {
  MAIN = 'MAIN',
  PRIVATE = 'PRIVATE',
  REVIEWREJECT = 'REVIEWREJECT',
}

// Service -> API related

export type SendUser = {
  userId: string;
  name: string;
};

export interface Response<T> {
  data: AxiosResponse | T;
  status?: number;
  message?: string;
}

export interface PackageOptions<T> {
  data: T;
  type?: string;
  user?: SendUser;
  specifiedRoute?: string;
}

export class Package<T> {
  data: T;
  type?: string;
  user?: SendUser;
  specifiedRoute?: string;
  constructor(props: PackageOptions<T>) {
    this.data = props.data;
    this.type = props.type;
    this.user = props.user;
    this.specifiedRoute = props.specifiedRoute;
  }
}

export class Service {
  protected baseUrl: string;
  protected errors: Error | string | null;
  constructor() {
    this.baseUrl = '';
    this.errors = null;
  }
}

// Theming
export interface ColorProfile {
  origin: string;
  tint?: string;
  shade?: string;
}

export interface Colors {
  primaryLight: ColorProfile;
  primaryDark: ColorProfile;
  primaryPale: ColorProfile;
  secondaryLight: ColorProfile;
  secondaryDark: ColorProfile;
  secondaryPale: ColorProfile;
  tertiaryLight: ColorProfile;
  tertiaryDark: ColorProfile;
  tertiaryPale: ColorProfile;
}

export interface ColorsMode {
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
  colors: ColorsMode;
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
  getColors(): ColorsMode;
  getBackgroundColor(): string;
  getTextColor(): string;
  getTint(): string;
  getComplementaryColors(): string;
  getColorsByMode(): ColorsByMode;
  getStatusColors(): StatusColors;
}
