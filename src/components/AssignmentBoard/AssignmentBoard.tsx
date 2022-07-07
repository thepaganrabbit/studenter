import React from 'react';

import BoardBox from '../BoardBox/BoardBox';
import './assignmentboard.scss';
import AssignmentBlock from '../AssignmentBlock/AssignmentBlock';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const AssignmentBoard = () => {
  const assignments = useSelector(
    (state: RootState) => state.assignment_mod.assignments,
  );
  return (
    <BoardBox title="Assignment Board">
      <div className="assignments">
        {assignments.map((assignment) => {
          return <AssignmentBlock key={assignment._id} {...assignment} />;
        })}
      </div>
    </BoardBox>
  );
};

export default AssignmentBoard;
