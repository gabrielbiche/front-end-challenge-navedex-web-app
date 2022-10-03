import { useForm } from 'react-hook-form';

import { Column, Image, Input, Button } from 'components';
import { loginSchema } from 'helpers/yupSchemas';
import logo from 'assets/logo/logo.svg';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: loginSchema });

  const onSubmit = data => console.log(data);

  return (
    <Column
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
      <Image src={logo} atl='logo' width={235.34} height={60} mx={106} my={40} />
      <Input
        name='email'
        ref={register}
        label='E-mail'
        placeholder='E-mail'
        error={errors.email?.message}
        variant='primary'
      />
      <Input
        name='password'
        ref={register}
        label='Senha'
        placeholder='Senha'
        error={errors.email?.password}
        variant='primary'
      />
      <Button onClick={() => onSubmit()} width={384} mb={32}>
        Entrar
      </Button>
    </Column>
  );
};

export default Login;
