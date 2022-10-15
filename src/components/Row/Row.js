import styled from 'styled-components';
import { space, layout, flexbox, position, border, grid, color } from 'styled-system';

const RowComponent = styled.div(
  {
    display: 'flex',
  },
  flexbox,
  space,
  layout,
  position,
  border,
  grid,
  color
);

export default RowComponent;
