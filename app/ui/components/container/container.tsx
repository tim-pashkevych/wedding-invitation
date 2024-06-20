'use client';

import clsx from 'clsx';

import styles from './container.module.css';

export const Container = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={clsx([
        'justify-top z-10 flex w-full flex-col items-center px-10 py-10 text-sm md:w-3/5',
        className,
      ])}
      {...props}
    >
      {children}
    </div>
  );
};
