import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

export const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const karlotte = localFont({
  src: './fonts/karlotte/Karlotte.woff',
  display: 'swap',
  variable: '--font-karlotte',
});

export const betmo = localFont({
  src: './fonts/betmo/Betmo.woff',
  display: 'swap',
  variable: '--font-betmo',
});
