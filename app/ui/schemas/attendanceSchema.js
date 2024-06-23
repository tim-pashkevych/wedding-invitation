import * as Yup from 'yup';

export const attendanceSchema = Yup.object({
  name: Yup.string().min(1).required('Name field is required'),
  email: Yup.string()
    .required('Email is required')
    .email('Enter a valid email')
    .max(30, 'Max length must be less than 30 chars'),
  adults: Yup.number()
    .required('Tell us how many addults attend')
    .positive('Tell us how many addults attend')
    .integer(),
  children: Yup.number().integer().default(0),
  message: Yup.string().default(''),
});
