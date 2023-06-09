import Header from '@/components/layout/Header';
import * as React from 'react';
import { Poppins } from '@next/font/google';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className={`${poppins.className}`}>
      <Header /> {children}
    </div>
  );
}
