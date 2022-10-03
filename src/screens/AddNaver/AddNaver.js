import { Column, NavBar, Text } from 'components';

const AddNaver = () => {
  return (
    <Column>
      <NavBar />
      <Column position='relative'>
        <Text fontSize={24} fontWeight={600} >
          Adicionar Naver
        </Text>
      </Column>
    </Column>
  );
};

export default AddNaver;
