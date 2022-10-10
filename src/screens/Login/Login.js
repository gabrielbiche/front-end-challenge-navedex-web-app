/* eslint-disable */
import { useForm } from 'react-hook-form';

import { Column, Image, Button, Input } from 'components';
import { loginSchema } from 'helpers/yupSchemas';
import { useUser } from 'context/userContext';
import logo from 'assets/logo/logo.svg';

const Login = () => {
  const { login } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: loginSchema });

  const onSubmit = async data => {
    const validUser = await login(data.email, data.password);
    if (!validUser) alert('Usuário e/ou senha invalído(s)');
  };

  return (
    <Column
      as='form'
      onSubmit={handleSubmit(onSubmit)}
      width={448}
      height={408}
      top={0}
      bottom={0}
      left={0}
      right={0}
      margin='auto'
      position='absolute'
      alignItems='center'
      border={1}
      borderStyle='solid'
      borderColor='primary.main'
    >
      <Image 
        src={logo} 
        atl='logo' 
        width={235.34} 
        height={60} 
        mx={106} 
        my={40} 
      />
      <Input
        name='email'
        label='E-mail'
        placeholder='E-mail'
        type='email'
        ref='ref'
        {...register('email')}
        error={errors.email?.message}
        variant='primary'
      />
      <Input
        name='password'
        label='Senha'
        placeholder='Senha'
        type='password'
        ref='ref'
        {...register('password')}
        error={errors.password?.message}
        variant='primary'
      />
      <Button type='submit' width={384} mb={32}>
        Entrar
      </Button>
    </Column>
  );
};

export default Login;
