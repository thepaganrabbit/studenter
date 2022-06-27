import React from 'react';

import './header.scss';
import { ThemeContext } from '../../theme/index';
import { ThemeBuilder } from '../../utils/ThemeBuilder';

const Header = () => {
  const themeCtx = React.useContext<ThemeBuilder>(ThemeContext);
  return (
    <div
      className="custom-header"
      style={{ background: themeCtx.getBackgroundColor() }}
    />
  );
};

export default Header;
