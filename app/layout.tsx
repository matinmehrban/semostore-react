// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'SemoStore',
  description: 'بهترین فروشگاه دیجیتال',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa">
      <body>{children}</body>
    </html>
  );
}
