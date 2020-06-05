import React, { useState } from 'react';
import ResourceList from './ResourceList';

const App = () => {
  const [resource] = useState('posts');

  return (
    <div>
      <div>
        <button>Posts</button>
        <button>Todos</button>
        <button>Users</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
