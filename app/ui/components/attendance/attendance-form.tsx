import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextareaAutosize from 'react-textarea-autosize';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { attendanceSchema } from '../../schemas/attendanceSchema';

export const AttendanceForm = () => {
  interface AttendanceData {
    name: string;
    adults: number;
    children: number;
    message: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AttendanceData>({
    resolver: yupResolver(attendanceSchema),
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
          {...register('children')}
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
        {errors.children?.message && (
          <p className="text-red-600">{errors.children?.message}</p>
        )}
      </div>
      <div className="mb-10 w-full">
        <TextareaAutosize
          {...register('message')}
          minRows={2}
          placeholder="Message"
          className="w-full border-b-2 bg-transparent text-xl "
        ></TextareaAutosize>
        {errors.message?.message && (
          <p className="text-red-600">{errors.message?.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-black/[.2] p-8 text-xl font-normal"
      >
        <PaperAirplaneIcon className="size-6"></PaperAirplaneIcon>
        Send
      </button>
    </form>
  );
};
