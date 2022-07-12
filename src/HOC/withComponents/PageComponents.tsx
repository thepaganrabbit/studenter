import React from 'react';

import './withComponents.scss';
import Header from '../../components/Header/Header';
import SideNav from '../../components/SideNav/SideNav';
import { ThemeContext } from '../../theme/ThemeContext';
import { ThemeBuilder } from '../../utils/ThemeBuilder';

const withComponents = (Component: any) => {
  return () => {
    const styleCtx = React.useContext<ThemeBuilder>(ThemeContext);
    return (
      <div
        style={{
          backgroundColor: styleCtx.getColorsByMode().colors.primary.origin,
          color: styleCtx.getColorsByMode().colors.secondary.tint,
        }}
        className="with-components"
      >
        <div className="top">
          <Header />
        </div>
        <div className="base">
          <SideNav />
          <div className="bod">
            <Component />
          </div>
        </div>
      </div>
    );
  };
};

export default withComponents;
