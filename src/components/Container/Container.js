import styled from 'styled-components';
import { space, layout } from 'styled-system';

const ContainerComponent = ({ children, ...props }) => <Container {...props}>{children}</Container>;

const Container = styled('div')(space, layout);

export default ContainerComponent;
