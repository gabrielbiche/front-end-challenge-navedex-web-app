import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';

import { Column, NavBar, Row, Link, Text, Icon, Input, Button } from 'components';
import { createNaver, updateNaver, getNaver } from 'services';
import { addNaverSchema } from 'helpers/yupSchemas';

const NaverForm = () => {
  const { id } = useParams();
  const { data: naver } = useQuery(['naver', id], getNaver, { enabled: !!id });
  const { mutate: create } = useMutation(createNaver);
  const { mutate: update } = useMutation(updateNaver);

  // if mutate sucess open modal
  // if close modal history return list navers

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: addNaverSchema });

  const onSubmit = async data => {
    id ? update({ id: id, ...data }) : create(data);
    reset();
  };

  useEffect(() => {
    reset({
      name: naver?.name || '',
      birthdate: naver?.birthdate || '',
      project: naver?.project || '',
      job_role: naver?.job_role || '',
      admission_date: naver?.admission_date || '',
      url: naver?.url || ''
    });
  }, [naver, reset]);

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
          <Link to='/navers'>
            <Icon name='arrow' />
          </Link>
          <Text fontSize={24} fontWeight={600} ml={22.49}>
            {id ? 'Editar Naver' : 'Adicionar Naver'}
          </Text>
        </Row>
        <Row as='form' onSubmit={handleSubmit(onSubmit)} mt={32}>
          <Column>
            <Input
              name='name'
              label='Nome'
              placeholder='Nome'
              type='text'
              ref='ref'
              {...register('name')}
              error={errors.name?.message}
            />
            <Input
              name='birthdate'
              label='Data de nascimento'
              placeholder='dd/mm/aaaa'
              ref='ref'
              {...register('birthdate')}
              error={errors.birthdate?.message}
            />
            <Input
              name='project'
              label='Projetos que participou'
              placeholder='Projetos que participou'
              type='text'
              ref='ref'
              {...register('project')}
              error={errors.project?.message}
            />
          </Column>
          <Column ml={32}>
            <Input
              name='job_role'
              label='Cargo'
              placeholder='Cargo'
              type='text'
              ref='ref'
              {...register('job_role')}
              error={errors.job_role?.message}
            />
            <Input
              name='admission_date'
              label='Data de admissão'
              placeholder='dd/mm/aaaa'
              ref='ref'
              {...register('admission_date')}
              error={errors.admission_date?.message}
            />
            <Input
              name='url'
              label='URL da foto do Naver'
              placeholder='URL da foto do Naver'
              type='url'
              ref='ref'
              {...register('url')}
              error={errors.url?.message}
            />
          </Column>
          <Button type='submit' position='absolute' bottom={0} ml={416}>
            Salvar
          </Button>
        </Row>
      </Column>
    </Column>
  );
};

export default NaverForm;
