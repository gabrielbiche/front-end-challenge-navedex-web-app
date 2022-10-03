import styled from 'styled-components';

import { Column, Text } from 'components';

const InputComponent = ({ label, name, placeholder, error, type, ...props }) => {
  return (
    <Column {...props}>
      <Column height={62} position='relative'>
        {label && (
          <Text variant='small' fontWeight={600} marginBottom={4}>
            {label}
          </Text>
        )}
        <Input name={name} placeholder={placeholder} error={error} type={type} />
        <Text position='absolute' top={64} color='red' variant='small'>
          {error} 
        </Text>
      </Column>
    </Column>
  );
};

const Input = styled.input`
  width: 280px;
  height: 40px;
  border: 1px solid black;
  padding: 4px 8px;
  font-size: 16px;
`;

export default InputComponent;
