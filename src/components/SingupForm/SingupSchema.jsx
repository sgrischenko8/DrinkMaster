import * as yup from 'yup';
import { objSigninSchema } from '../SinginForm/SinginSchema';

const objSignupSchema = {
  ...objSigninSchema,
  name: yup.string('Enter your name').required('Name is required'),
  birthday: yup
    .date('Enter your birthday')
    .typeError('Enter your birthday')
    .min(new Date(1900, 1, 1), 'Enter your birthday')
    .max(new Date(), 'Enter your birthday')
    .required('Birthday is required'),
};
export const signupSchema = yup.object(objSignupSchema);
