import * as Yup from 'yup';

export const attendanceSchema = Yup.object({
  name: Yup.string().required('Please, tell us who you are'),
  adults: Yup.number()
    .required('How many adults (12+ years) attend')
    .positive('How many adults (12+ years) attend')
    .integer(),
  kids: Yup.number()
    .required('How many kids (2-11 years) going with you')
    .integer()
    .oneOf(
      [0, 1, 2, 3, 4, 5, 6, 7],
      'How many kids (2-11 years) going with you',
    ),
});
