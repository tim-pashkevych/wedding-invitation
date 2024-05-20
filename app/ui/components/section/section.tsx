'use client';

import clsx from 'clsx';

import { karlotte, betmo } from '@/app/ui/fonts';
import styles from './section.module.css';

export const Section = ({
  children,
  className,
  descriptionClassName,
  background,
  title,
  titleDescription,
}: {
  children: React.ReactNode;
  className?: string;
  descriptionClassName?: string;
  background?: string;
  title?: string;
  titleDescription?: string;
}) => {
  return (
    <section
      className={clsx([
        className,
        karlotte.variable,
        betmo.variable,
        'flex w-full flex-col items-center',
        { 'mb-14': className?.includes('mb-0') ? false : true },
      ])}
    >
      {title && (
        <h2
          className={clsx([
            'relative mb-6 flex w-auto flex-col text-center text-5xl uppercase md:text-6xl',
            styles.title,
          ])}
        >
          <span className="">{title}</span>
          {titleDescription && (
            <span
              className={clsx([
                'absolute -bottom-12 right-10 text-6xl normal-case text-black/[.2] md:text-7xl',
                styles.titleDescription,
                descriptionClassName,
              ])}
            >
              {titleDescription}
            </span>
          )}
        </h2>
      )}
      {children}
    </section>
  );
};
