import { useMemo } from 'react';

import Arrow from './Arrow';
import Trash from './Trash';
import Pen from './Pen';

const IconComponent = ({ name }) => {
  const Icon = useMemo(() => {
    switch (name) {
      case 'trash':
        return Trash;
      case 'arrow':
        return Arrow;
      case 'pen':
        return Pen;
    }
  }, [name]);

  return <Icon />;
};

export default IconComponent;
