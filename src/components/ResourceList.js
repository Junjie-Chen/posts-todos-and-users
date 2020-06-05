import React from 'react';
import useResources from '../hook/useResources';

const ResourceList = ({ resource }) => {
  useResources(resource);

  return <div>Resource List</div>;
};

export default ResourceList;
