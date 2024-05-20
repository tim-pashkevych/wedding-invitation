import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { montserrat } from '@/app/ui/fonts';
import '@/app/ui/globals.css';

export const metadata: Metadata = {
  title: 'Wedding Invintation',
  description: 'Wedding invintation app for Konstantin & Valentina',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
