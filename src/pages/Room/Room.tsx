import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import './room.scss';
import DataTable from '../../components/DataTable/index';
import { MUIDataTableColumnDef } from 'mui-datatables';
import MessageBoard from '../../components/MessageBoard/MessageBoard';
import AssignmentBoard from '../../components/AssignmentBoard/AssignmentBoard';

const Room = () => {
  const students = useSelector(
    (state: RootState) => state.student_mod.students,
  );
  const memoizedStudents = React.useMemo(() => {
    return students;
  }, [students]);

  const studentColumns: MUIDataTableColumnDef[] = [
    {
      label: 'ID',
      name: 'id',
    },
    {
      label: 'First Name',
      name: 'firstName',
    },
    {
      label: 'Last Name',
      name: 'lastName',
    },
    {
      label: 'Middle Initial',
      name: 'middleInitial',
    },
    {
      label: 'Class',
      name: 'class',
    },
    {
      label: 'Class',
      name: 'class',
    },
    {
      label: 'GPA',
      name: 'gpa',
    },
    {
      label: 'File Reference #',
      name: 'fileLink',
    },
  ];
  return (
    <div className="container-room">
      <div
        className="table"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <DataTable
          title={'Students'}
          data={memoizedStudents}
          columns={studentColumns}
        />
      </div>
      <div className="boards">
        <div className="b-base">
          <MessageBoard />
        </div>
        <div className="b-base">
          <AssignmentBoard />
        </div>
      </div>
    </div>
  );
};

export default Room;
