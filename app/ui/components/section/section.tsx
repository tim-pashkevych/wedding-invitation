'use client';

import clsx from 'clsx';
import { Parallax } from 'react-scroll-parallax';
import { CSSProperties } from 'react';

import { karlotte, betmo } from '@/app/ui/fonts';
import styles from './section.module.css';

export const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={clsx([
        className,
        karlotte.variable,
        betmo.variable,
        'flex w-full flex-col items-center',
      ])}
    >
      {children}
    </section>
  );
};
