import React from 'react';
import { Link } from 'react-router-dom';

const Home = (): React.ReactElement => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Link to={'/'}>Home</Link>
        <Link to={'/guard'}>Guarded Home</Link>
      </div>
      <p>Hello</p>
    </div>
  );
};

export default Home;
