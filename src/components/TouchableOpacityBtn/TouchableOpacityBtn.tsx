import React from 'react';

import { TouchableOpacityProps } from '../../types';

const TouchableOpacityBtn = ({ children, onClick }: TouchableOpacityProps) => {
  return (
    <button className="touchable-opacity" onClick={onClick}>
      {children}
    </button>
  );
};

export default TouchableOpacityBtn;
