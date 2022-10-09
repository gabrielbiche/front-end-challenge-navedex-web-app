import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const yupShapeWithResolver = shape => yupResolver(yup.object().shape(shape));

export const loginSchema = yupShapeWithResolver({
  email: yup.string().email().required('Insira um e-mail válido'),
  password: yup.string().min(6, 'Mínimo de 6 caracteres no campo').required()
});

export const addNaverSchema = yupShapeWithResolver({
  name: yup.string().min(2, 'Mínimo de 2 caracteres no campo').required(),
  idade: yup.number().required(),
  projetosQueParticipou: yup.number(),
  cargo: yup.string().min(3, 'Mínimo de 3 caracteres no campo').required(),
  tempoDeEmpresa: yup.string().required(),
  urlFoto: yup.string().url()
});
