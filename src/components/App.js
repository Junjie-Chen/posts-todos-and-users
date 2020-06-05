import React from 'react';
import ResourceList from './ResourceList';

const App = () => {
  return (
    <div>
      <div>
        <button>Posts</button>
        <button>Todos</button>
        <button>Users</button>
      </div>
      <ResourceList />
    </div>
  );
};

export default App;
