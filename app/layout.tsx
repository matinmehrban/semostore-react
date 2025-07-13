// app/layout.tsx
import '../styles/globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'SemoStore - فروشگاه گجت و دیجیتال',
  description: 'جدیدترین محصولات دیجیتال را در SemoStore ببینید.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa">
      <body>{children}</body>
    </html>
  );
}
