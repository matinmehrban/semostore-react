// app/layout.tsx
import '../styles/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'SemoStore',
  description: 'فروشگاه حرفه‌ای گجت و دیجیتال',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa">
      <body>{children}</body>
    </html>
  );
}
