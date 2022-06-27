import { ButtonProps } from '@mui/material';
import React from 'react';
import { ThemeContext } from '../../theme';
import { ThemeBuilder } from '../../utils/ThemeBuilder';

const Button = ({ children, onClick }: ButtonProps) => {
  const themeCtx = React.useContext<ThemeBuilder>(ThemeContext);
  return (
    <button
      className="button is-responsive"
      style={{
        backgroundColor: themeCtx.getColorsByMode().tint,
        width: '100%',
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
