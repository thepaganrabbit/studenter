import React from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import { routeManager } from './routing';
import { RootState } from './store';

function App() {
  const testState = useSelector((state: RootState) => state.test_mod)
  return (
    <div className="App">
      <header className="App-header">
        <p>Version: {testState.version}</p>
        {routeManager()}
      </header>
    </div>
  );
}

export default App;
