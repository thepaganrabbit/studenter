import React from 'react';
import { HeaderProps } from '../../types';

import './header.scss';

const Header = ({ color }: HeaderProps) => {
  return (
    <div
      className="custom-header"
      style={{ background: color ? color : 'blue' }} />
  );
};

export default Header;
