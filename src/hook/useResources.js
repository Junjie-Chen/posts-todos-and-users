import { useState } from 'react';

const useResources = () => {
  const [resources] = useState([]);

  return resources;
};

export default useResources;
