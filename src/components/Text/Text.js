import styled from 'styled-components';
import { space, layout, typography, color, position, variant } from 'styled-system';

const BIG = 'big';
const REGULAR = 'regular';

const TextComponent = styled.p(
  space,
  layout,
  typography,
  color,
  position,
  variant({
    variants: {
      [BIG]: {
        fontSize: 24,
        lineHeight: '36px'
      },
      [REGULAR]: {
        fontSize: 16,
        lineHeight: '24px'
      }
    }
  })
);

export default TextComponent;
