import React from 'react';
import useResources from '../hook/useResources';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <ul>
      {
        resources.map(resource => <li key={resource.id}>{resource.title || resource.name}</li>)
      }
    </ul>
  );
};

export default ResourceList;
