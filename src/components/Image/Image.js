import styled from 'styled-components';
import { space, layout } from 'styled-system';

const ImageComponent = ({ src, atl, ...props }) => <Image src={src} atl={atl} {...props} />;

const Image = styled('img')(space, layout);

export default ImageComponent;
