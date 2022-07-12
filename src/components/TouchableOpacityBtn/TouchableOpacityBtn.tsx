import React from 'react';

import { TouchableOpacityProps } from '../../types';

const TouchableOpacityBtn = ({ children, onClick }: TouchableOpacityProps) => {
  return (
    <button
      className="touchable-opacity"
      data-testid="touch-op"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default TouchableOpacityBtn;
