import React from 'react';

import './home.scss';
import withComponents from '../../HOC/withComponents/PageComponents';
import Forum from '../Forum/Forum';

const Home = (): React.ReactElement => {
  return (
    <div className="home">
      <Forum />
    </div>
  );
};

export default withComponents(Home);
