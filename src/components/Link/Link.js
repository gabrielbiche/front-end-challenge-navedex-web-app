import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import { typography, color, space } from 'styled-system';

const LinkComponent = ({ to, label, ...props }) => {
  return (
    <Link to={to} {...props}>
      {label}
    </Link>
  );
};

const Link = styled(RouterLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  ${typography}
  ${color}
  ${space}
`;

export default LinkComponent;
