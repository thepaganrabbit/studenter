import React from 'react';

import Header from '../../components/Header/Header';
import SideNav from '../../components/SideNav/SideNav';
import './home.scss';

const Home = (): React.ReactElement => {
  return (
    <div className="home">
      <Header />
      <SideNav />
    </div>
  );
};

export default Home;
