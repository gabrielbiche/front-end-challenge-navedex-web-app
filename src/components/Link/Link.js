import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import { typography, color, space } from 'styled-system';

const LinkComponent = ({ to, label, children,...props }) => {
  return (
    <Link to={to} {...props}>
      {label || children}
    </Link>
  );
};

const Link = styled(RouterLink)`
  display: flex;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  ${typography}
  ${color}
  ${space}
`;

export default LinkComponent;
