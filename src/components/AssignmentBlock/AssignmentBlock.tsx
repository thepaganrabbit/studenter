import React from 'react';

import { ThemeContext } from '../../theme';
import { ThemeBuilder } from '../../utils/ThemeBuilder';
import TouchableOpacityBtn from '../TouchableOpacityBtn/TouchableOpacityBtn';
import './assignmentblock.scss';
import { AssignmentBlockProps } from '../../types';

const AssignmentBlock = ({
  title,
  description,
  points,
  classId,
  dueDate,
  createdOn,
}: AssignmentBlockProps) => {
  const [status, setStatus] = React.useState<boolean>(false);
  const themeCtx = React.useContext<ThemeBuilder>(ThemeContext);
  return (
    <div className="assingment-block">
      <TouchableOpacityBtn
        onClick={() => {
          setStatus(!status);
        }}
      >
        <div className="blk-title">
          <h4>{title}</h4>
          <p>{createdOn.toString()}</p>
        </div>
      </TouchableOpacityBtn>
      <div
        className={`collapsa-box ${status ? 'open' : 'collapsed'}`}
        style={{
          backgroundColor: themeCtx.getColorsByMode().tint,
          color: themeCtx.getTextColor(),
        }}
      >
        <div className="description">
          <p className="sub-title">description:</p>
          <p className="para-content">{description}</p>
        </div>
        <div className="documents">
          <div className="select">
            <select>
              <option>Documents</option>
              <option>With options</option>
            </select>
          </div>
        </div>
        <div className="bottom-bar">
          <div id="points">
            Points: {typeof points === 'boolean' ? 'PASS/FAIL' : points}
          </div>
          <div id="classId">Class: {classId ? classId : ''}</div>
          <div id="dueDate">due: {!dueDate ? '' : dueDate.toString()}</div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentBlock;
