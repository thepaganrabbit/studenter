import React from 'react';

import './boardbox.scss';
import { ThemeContext } from '../../theme';
import { ThemeBuilder } from '../../utils/ThemeBuilder';
import { BoardProps } from '../../types';

const BoardBox = ({ title, children }: BoardProps) => {
  const themeCtx = React.useContext<ThemeBuilder>(ThemeContext);
  return (
    <div
      className="board-box"
      style={{
        backgroundColor: themeCtx.getColorsByMode().background,
        color: themeCtx.getTextColor(),
      }}
    >
      <div className="title">
        <h2 style={{ color: themeCtx.getTextColor() }}>{title}</h2>
      </div>
      <div className="bb-content">{children}</div>
    </div>
  );
};

export default BoardBox;
