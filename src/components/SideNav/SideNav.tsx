import React from 'react';

import { ThemeContext } from '../../theme';
import { ThemeBuilder } from '../../utils/ThemeBuilder';
import Button from '../Button/Button';
import './sidenav.scss';

const SideNav = () => {
  const themeCtx = React.useContext<ThemeBuilder>(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: themeCtx.getComplementaryColors(),
        color: themeCtx.getTextColor(),
      }}
      className="side-nav"
    >
      <Button onClick={() => ({})}>Room</Button>
      <Button onClick={() => ({})}>Docs</Button>
      <Button onClick={() => ({})}>Lessons</Button>
      <Button onClick={() => ({})}>Grades</Button>
      <Button onClick={() => ({})}>Noteboard</Button>
      <Button onClick={() => ({})}>Forum</Button>
      <Button onClick={() => ({})}>Home</Button>
      <Button onClick={() => ({})}>Settings</Button>
    </div>
  );
};

export default SideNav;
