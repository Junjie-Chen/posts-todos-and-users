import React from 'react';
import useResources from '../hook/useResources';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <ul>
      {
        resources.map(({ id, title, name }) => <li key={id}>{title || name}</li>)
      }
    </ul>
  );
};

export default ResourceList;
