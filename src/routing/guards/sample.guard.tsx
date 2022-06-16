import React from 'react';
import { PropsBase } from '../../types';

const SampleGuard = ({ children }: PropsBase) => {
  React.useEffect(() => {
    alert('Impliment any route guard in here.');
    return () => {}
  }, []);
  return <>{children}</>;
};

export default SampleGuard;
