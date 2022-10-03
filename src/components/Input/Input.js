import styled from 'styled-components';
import { variant } from 'styled-system';

import { Column, Text } from 'components';

const InputComponent = ({ label, name, placeholder, error, type, ...props }) => {
  return (
    <Column mb={32}>
      <Column height={62} position='relative'>
        {label && (
          <Text variant='small' fontWeight={600} marginBottom={4}>
            {label}
          </Text>
        )}
        <Input {...props} name={name} placeholder={placeholder} error={error} type={type} />
        <Text position='absolute' top={64} color='red' variant='small'>
          {error}
        </Text>
      </Column>
    </Column>
  );
};

const Input = styled('input')(
  {
    width: '280px',
    height: '40px',
    border: '1px',
    borderStyle: 'solid',
    borderColor: 'black',
    paddingTop: '4px',
    paddingLeft: '8px',
    fontSize: '16px'
  },
  variant({
    variants: {
      primary: {
        width: '384px'
      }
    }
  })
);

export default InputComponent;
