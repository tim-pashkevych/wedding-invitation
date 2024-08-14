'use client';

import { useEffect, useRef, useState } from 'react';
import { intervalToDuration, differenceInDays } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import clsx from 'clsx';

import { karlotte, montserrat } from '@/app/ui/fonts';

interface Timer {
  days: Number | undefined;
  hours: Number | undefined;
  minutes: Number | undefined;
  seconds: Number | undefined;
}
export const BacktickTimer = () => {
  const weddingDate = useRef(
    toZonedTime(new Date(2024, 7, 12, 15, 30), 'America/Los_Angeles'),
  );
  const [timer, setTimer] = useState<Timer>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timerId = setInterval(() => {
      const now = toZonedTime(new Date(), 'America/Los_Angeles');
      const interval = intervalToDuration({
        start: now,
        end: weddingDate.current,
      });

      const days = differenceInDays(weddingDate.current, now);

      if (days < 0) {
        setTimer({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        clearInterval(timerId);
        return;
      }

      setTimer({
        days,
        hours: interval.hours,
        minutes: interval.minutes,
        seconds: interval.seconds,
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [timer]);

  return (
    <div className={clsx([karlotte.className, 'flex gap-4 pt-5'])}>
      <div className="text-center">
        <div className="flex h-20 w-16 items-center justify-center rounded bg-gradient-to-b from-black from-30% via-gray-500 via-50% to-black to-80% align-middle text-4xl font-bold text-white">
          {timer.days ? timer.days.toString().padStart(2, '0') : '00'}
        </div>
        <div className={montserrat.className}>days</div>
      </div>

      <div className="text-center">
        <div className="flex h-20 w-16 items-center justify-center rounded bg-gradient-to-b from-black from-30% via-gray-500 via-50% to-black to-80% align-middle text-4xl font-bold text-white">
          {timer.hours ? timer.hours.toString().padStart(2, '0') : '00'}
        </div>
        <div className={montserrat.className}>hours</div>
      </div>

      <div className="text-center">
        <div className="flex h-20 w-16 items-center justify-center rounded bg-gradient-to-b from-black from-30% via-gray-500 via-50% to-black to-80% align-middle text-4xl font-bold text-white">
          {timer.minutes ? timer.minutes.toString().padStart(2, '0') : '00'}
        </div>
        <div className={montserrat.className}>minutes</div>
      </div>

      <div className="text-center">
        <div className="flex h-20 w-16 items-center justify-center rounded bg-gradient-to-b from-black from-30% via-gray-500 via-50% to-black to-80% align-middle text-4xl font-bold text-white">
          {timer.seconds ? timer.seconds.toString().padStart(2, '0') : '00'}
        </div>
        <div className={montserrat.className}>seconds</div>
      </div>
    </div>
  );
};
