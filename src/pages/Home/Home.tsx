import React from 'react';

import './home.scss';
import withComponents from '../../HOC/withComponents/PageComponents';
import Room from '../Room/Room';

const Home = (): React.ReactElement => {
  return (
    <div className="home">
      <Room />
    </div>
  );
};

export default withComponents(Home);
