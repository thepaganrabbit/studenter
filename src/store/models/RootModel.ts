import { RootModel } from '../../types';
import { test_mod } from './Test.model';
import { student_mod } from './Student.model';
import { message_mod } from './Messages.model';
import { assignment_mod } from './Assignment.model';

export const models: RootModel = {
  test_mod: test_mod,
  student_mod: student_mod,
  message_mod: message_mod,
  assignment_mod: assignment_mod,
};
