import { useMemo } from 'react';
import styled from 'styled-components';

import Arrow from './Arrow';
import Trash from './Trash';
import Pen from './Pen';
import Close from './Close';

const IconComponent = ({ name, onClick, ...props }) => {
  const Icon = useMemo(() => {
    switch (name) {
      case 'trash':
        return Trash;
      case 'arrow':
        return Arrow;
      case 'pen':
        return Pen;
      case 'close':
        return Close;
    }
  }, [name]);

  if (typeof onClick !== 'function') {
    return <Icon {...props} />;
  }

  return (
    <Button onClick={onClick}>
      <Icon {...props} />
    </Button>
  );
};

const Button = styled.button`
  background: transparent;
`;
export default IconComponent;
