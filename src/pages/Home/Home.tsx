import React from 'react';
import { Link } from 'react-router-dom';
import DataTable from '../../components/DataTable';

const Home = (): React.ReactElement => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Link to={'/'}>Home</Link>
        <Link to={'/guard'}>Guarded Home</Link>
      </div>
      <p>Hello</p>
      <DataTable data={[] as Array<string>} title="Test" columns={[]} />
    </div>
  );
};

export default Home;
