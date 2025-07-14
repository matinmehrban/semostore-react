// app/page.tsx
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <header className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="SemoStore Logo" width={60} height={60} />
          <h1 className="text-3xl font-bold">SemoStore</h1>
        </div>
        <nav className="space-x-6 text-lg">
          <a href="#" className="hover:text-cyan-400">خانه</a>
          <a href="#" className="hover:text-cyan-400">محصولات</a>
          <a href="#" className="hover:text-cyan-400">درباره ما</a>
          <a href="#" className="hover:text-cyan-400">تماس</a>
        </nav>
      </header>

      <section className="text-center mb-20">
        <h2 className="text-4xl font-bold mb-4">خوش آمدید به دنیای گجت‌های مدرن</h2>
        <p className="text-xl text-gray-300">در SemoStore جدیدترین و حرفه‌ای‌ترین محصولات دیجیتال را پیدا خواهید کرد.</p>
      </section>

      <footer className="text-center text-gray-500 border-t border-gray-700 pt-6 mt-12">
        © 2025 SemoStore - همه حقوق محفوظ است.
      </footer>
    </main>
  );
}
