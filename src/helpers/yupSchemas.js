import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const yupShapeWithResolver = shape => yupResolver(yup.object().shape(shape));

export const loginSchema = yupShapeWithResolver({
  email: yup.string().email().required('Insira um e-mail válido'),
  password: yup.string().min(6, 'Mínimo de 6 caracteres no campo').required()
});

export const addNaverSchema = yupShapeWithResolver({
  name: yup.string().min(3, 'Mínimo de 3 caracteres no campo'),
  birthdate: yup
    .string()
    .matches(
      /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/,
      'Insira uma data válida'
    )
    .required(),
  project: yup.string().min(3, 'Mínimo de 3 caracteres no campo'),
  job_role: yup.string().min(3, 'Mínimo de 3 caracteres no campo'),
  admission_date: yup
    .string()
    .matches(
      /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/,
      'Insira uma data válida'
    )
    .required(),
  url: yup.string().url()
});
