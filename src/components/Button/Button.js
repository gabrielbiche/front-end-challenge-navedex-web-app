import styled from 'styled-components';
import { space, layout } from 'styled-system';

const ButtonComponents = ({ children, ...props }) => <Button {...props}>{children}</Button>;

const Button = styled('button')(
  {
    fontSize: '14',
    fontWeight: ({ theme }) => theme.fontWeights.semiBold,
    width: ({ theme }) => `${theme.sizes.regular}px`,
    height: ({ theme }) => `${theme.sizes.small}px`,
    color: ({ theme }) => theme.colors.white,
    background: ({ theme }) => theme.colors.primary.main
  },
  space,
  layout
);

export default ButtonComponents;
