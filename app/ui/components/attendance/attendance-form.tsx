import { useForm } from 'react-hook-form';
import { computedTypesResolver } from '@hookform/resolvers/computed-types';
import Schema, { number, string } from 'computed-types';
import TextareaAutosize from 'react-textarea-autosize';

export const AttendanceForm = () => {
  interface AttendanceData {
    name: string;
    email: string;
    adults: number;
    children: number;
    message: string;
  }

  const schema = Schema({
    name: string.min(1).error('Name field is required'),
    email: string.min(1).error('Email field is required'),
    adults: string,
    children: string,
    message: string,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AttendanceData>({
    resolver: computedTypesResolver(schema),
  });

  const onSubmit = (data: AttendanceData) => {
    console.log(data);
    // do api stuff here
  };

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
          className="w-full border-b-2 bg-transparent text-xl text-white"
        />
        {errors.name?.message && <p>{errors.name?.message}</p>}
      </div>
      <div className="mb-10 w-full">
        <input
          type="text"
          {...register('email')}
          placeholder="Your email"
          className="w-full border-b-2 bg-transparent text-xl text-white"
        />
        {errors.email?.message && <p>{errors.email?.message}</p>}
      </div>
      <div className="mb-10 w-full">
        <select
          {...register('adults')}
          className="w-full border-b-2 bg-transparent text-xl text-white"
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
        {errors.adults?.message && <p>{errors.adults?.message}</p>}
      </div>
      <div className="mb-10 w-full">
        <select
          {...register('children')}
          className="w-full border-b-2 bg-transparent text-xl text-white"
        >
          <option value={0}>Children (2 - 11 years)</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
        </select>
        {errors.children?.message && <p>{errors.children?.message}</p>}
      </div>
      <div className="mb-10 w-full">
        <TextareaAutosize
          {...register('message')}
          placeholder="Message"
          className="w-full border-b-2 bg-transparent text-xl text-white"
        ></TextareaAutosize>
        {errors.message?.message && <p>{errors.message?.message}</p>}
      </div>
      <button
        type="submit"
        className="h-10 w-full rounded-xl bg-white font-bold text-black"
      >
        Send
      </button>
    </form>
  );
};
