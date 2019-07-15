import React from 'react';
import Dashboard from '../Dashboard';

import PlanetList from './PlanetList';
import PlanetForm from './PlanetForm';

function App() {
  return (
    <Dashboard
      activeSection="planets"
      list={PlanetList}
      form={PlanetForm}
    />
  );
}

export default App;
