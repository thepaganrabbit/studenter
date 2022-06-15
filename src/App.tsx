import React from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import { RootState } from './store';

function App() {
  const testState = useSelector((state: RootState) => state.test_mod)
  return (
    <div className="App">
      <header className="App-header">
        <p>Age Test: {testState.age}</p>
      </header>
    </div>
  );
}

export default App;
