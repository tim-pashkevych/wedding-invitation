import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

import { attendanceSchema } from '../../schemas/attendanceSchema';
import { IAttendanceSubmission } from '@/app/types';
import { save, sendEmail } from './attendance-form-actions';

export const AttendanceForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAttendanceSubmission>({
    resolver: yupResolver(attendanceSchema),
  });

  const onSubmit = async (data: IAttendanceSubmission) => {
    await save(data);
    await sendEmail(data);

    setIsSubmitted(true);
  };

  if (isSubmitted)
    return (
      <div
        data-aos="flip-up"
        data-aos-duration="2000"
        data-aos-offset="100"
        data-aos-delay="100"
      >
        <p className="text-center text-xl">Thank you for your registration. </p>
        <p className="text-center text-xl">We are excited to see you soon.</p>
      </div>
    );

  return (
    <form
      className="flex w-full flex-col items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-10 w-full">
        <input
          type="text"
          {...register('name')}
          placeholder="Name"
          className="w-full border-b-2 bg-transparent text-xl"
        />
        {errors.name?.message && (
          <p className="text-red-600">{errors.name?.message}</p>
        )}
      </div>
      <div className="mb-10 w-full">
        <select
          {...register('adults')}
          className="w-full border-b-2 bg-transparent text-xl "
        >
          <option value={0}>Adults (12+ years)</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
        </select>
        {errors.adults?.message && (
          <p className="text-red-600">{errors.adults?.message}</p>
        )}
      </div>
      <div className="mb-10 w-full">
        <select
          {...register('kids')}
          className="w-full border-b-2 bg-transparent text-xl "
        >
          <option value={-1}>Children (2 - 11 years)</option>
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
        </select>
        {errors.kids?.message && (
          <p className="text-red-600">{errors.kids?.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-black/[.9] p-8 text-xl font-normal text-white"
      >
        <PaperAirplaneIcon className="size-6"></PaperAirplaneIcon>
        Send
      </button>
    </form>
  );
};
