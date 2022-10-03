import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const yupShapeWithResolver = shape => yupResolver(yup.object().shape(shape));

export const loginSchema = yupShapeWithResolver({
  email: yup.string().email('Insira um e-mail válido').required(),
  password: yup.string().min(6, 'Mínimo de 6 caracteres no campo').required()
});
