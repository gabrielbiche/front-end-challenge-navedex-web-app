import { useForm } from 'react-hook-form';

import { Column, NavBar, Row, Text, Link, Icon, Input, Button } from 'components';
import { addNaverSchema } from 'helpers/yupSchemas';

const AddNaver = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: addNaverSchema });

  const onSubmit = data => console.log(data);

  return (
    <Column>
      <NavBar />
      <Column
        width={592}
        height={390}
        top={125}
        bottom={205}
        left={0}
        right={0}
        margin='auto'
        position='absolute'
      >
        <Row alignItems='center'>
          <Link to='/home'>
            <Icon name='arrow' />
          </Link>
          <Text fontSize={24} fontWeight={600} ml={22.49}>
            Adicionar Naver
          </Text>
        </Row>
        <Column onSubmit={handleSubmit(onSubmit)} flexDirection='row' mt={32}>
          <Column>
            <Input
              name='nome'
              ref={register}
              label='Nome'
              placeholder='Nome'
              error={errors.nome?.message}
            />
            <Input
              name='idade'
              ref={register}
              label='Idade'
              placeholder='Idade'
              error={errors.idade?.message}
            />
            <Input
              name='projetosQueParticipou'
              ref={register}
              label='Projetos que participou'
              placeholder='Projetos que participou'
              error={errors.projetosQueParticipou?.message}
            />
          </Column>
          <Column ml={32}>
            <Input
              name='cargo'
              ref={register}
              label='Cargo'
              placeholder='Cargo'
              error={errors.cargo?.message}
            />
            <Input
              name='tempoDeEmpresa'
              ref={register}
              label='Tempo de empresa'
              placeholder='Tempo de empresa'
              error={errors.tempoDeEmpresa?.message}
            />
            <Input
              name='urlFoto'
              ref={register}
              label='URL da foto do Naver'
              placeholder='URL da foto do Naver'
              error={errors.urlFoto?.message}
            />
          </Column>
        </Column>
        <Button ml={416}> Salvar </Button>
      </Column>
    </Column>
  );
};

export default AddNaver;
