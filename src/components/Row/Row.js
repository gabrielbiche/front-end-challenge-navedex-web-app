import styled from 'styled-components';
import { space, layout, flexbox, position, border } from 'styled-system';

const RowComponent = styled.div(
  {
    display: 'flex'
  },
  flexbox,
  space,
  layout,
  position,
  border
);

export default RowComponent;
