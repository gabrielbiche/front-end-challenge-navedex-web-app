import styled from 'styled-components';
import { space, layout, typography, color, position, variant } from 'styled-system';

const BIG = 'big';
const MEDIUM = 'medium';
const REGULAR = 'regular';
const SMALL = 'small';

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
        lineHeight: '29px'
      },
      [MEDIUM]: {
        fontSize: 20,
        lineHeight: '24px'
      },
      [REGULAR]: {
        fontSize: 16,
        lineHeight: '25px'
      },
      [SMALL]: {
        fontSize: 14,
        lineHeight: '18px'
      }
    }
  })
);

export default TextComponent;
