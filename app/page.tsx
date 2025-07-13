// app/page.tsx
import Image from 'next/image';

export default function Home() {
  return (
    <main style={{ textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        🎉 به فروشگاه <strong>SemoStore</strong> خوش آمدید!
      </h1>

      <Image
        src="/mybanner.png"
        alt="بنر فروشگاه"
        width={1200}
        height={400}
        style={{ borderRadius: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
      />

      <p style={{ marginTop: '2rem', fontSize: '1.2rem' }}>
        اینجا بهترین محصولات رو پیدا می‌کنی 😉
      </p>
    </main>
  );
}
