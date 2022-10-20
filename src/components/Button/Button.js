import styled from 'styled-components';
import { space, layout, position, variant } from 'styled-system';

const ButtonComponents = ({ children, ...props }) => <Button {...props}>{children}</Button>;

const Button = styled.button`
  font-size: 14px;
  font-weight: 600;
  width: 176px;
  height: 40px;
  color: white;
  background: #212121;
  ${space}
  ${layout}
  ${position}
  ${variant({
    variants: {
      primary: {
        bg: 'white',
        color: '#212121',
        fontWeight: 600,
        border: '1px',
        borderStyle: 'solid',
        borderColor: '#212121'
      }
    }
  })}
`;

export default ButtonComponents;
