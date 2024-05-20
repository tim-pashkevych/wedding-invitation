export const AttendanceForm = () => {
  return (
    <form className="flex w-full flex-col items-center">
      <div className="mb-10">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full border-b-2 bg-transparent text-xl text-white"
        />
      </div>
      <div className="mb-10">
        <textarea
          name="message"
          placeholder="Message"
          className="w-full border-b-2 bg-transparent text-xl text-white"
        ></textarea>
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
