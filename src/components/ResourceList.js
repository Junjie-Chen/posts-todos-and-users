import React from 'react';
import useResources from '../hook/useResources';

const ResourceList = props => {
  useResources(props.resource);

  return <div>Resource List</div>;
};

export default ResourceList;
