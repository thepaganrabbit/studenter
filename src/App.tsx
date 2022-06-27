import React from 'react';
import './App.scss';
import { routeManager } from './routing';
import { theme, ThemeContext } from './theme';
// import { RootState } from './store';

function App() {
  // const testState = useSelector((state: RootState) => state.test_mod);
  return (
    <div className="App">
      <header className="App-header">
        <ThemeContext.Provider value={theme}>
          {routeManager()}
        </ThemeContext.Provider>
      </header>
    </div>
  );
}

export default App;
