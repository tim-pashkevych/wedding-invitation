'use client';

import clsx from 'clsx';

import styles from './parallax.module.css';
import { useParallax } from 'react-scroll-parallax';

export const Parallax = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const parallax = useParallax<HTMLDivElement>({
    easing: 'easeOutQuad',
    translateX: [0, 100],
  });

  return (
    <div
      className={clsx([
        'justify-top z-10 flex w-full flex-col items-center px-10 py-10 text-sm md:w-3/5',
        className,
      ])}
      ref={parallax.ref}
    >
      {children}
    </div>
  );
};
