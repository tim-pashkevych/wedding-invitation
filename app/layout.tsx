import { Providers } from './providers';
import type { Metadata } from 'next';
import { montserrat } from '@/app/ui/fonts';
import '@/app/ui/globals.css';

export const metadata: Metadata = {
  title: 'Konstantin & Valentina Sokolov',
  description: 'Wedding invitation app for Konstantin & Valentina',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
