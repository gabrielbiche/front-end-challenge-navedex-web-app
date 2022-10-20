import styled from 'styled-components';

import { Row, Column } from 'components';

const Rocket = () => {
  return (
    <Column zIndex='auto' top={0} bottom={0} left={0} right={0} m='auto' position='fixed'>
      <Row position='absolute' width='100%' height='100vh' alignItems='center' justifyContent='center'>
        <Svg>
          <path
            d='M28.1586 60L28.8491 45.2685L14.7315 31.1509L0 31.8414L16.1893 19.4118L28.312 18.1074L38.5933 7.90281L60.0767 0L52.0972 21.4834L41.8926 31.688L40.5882 43.8107L28.1586 60ZM23.8615 44.6541L15.4216 36.1375L11.3551 49.1809L23.8615 44.6541Z'
            fill='#212121'
          />
        </Svg>
      </Row>
    </Column>
  );
};

const Svg = styled('svg')`
  width: 61px;
  height: 60px;
  animation: loading 1.5s linear infinite;
  @keyframes loading {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Rocket;
