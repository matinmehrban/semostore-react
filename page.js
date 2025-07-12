
export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-4">به فروشگاه SEMO خوش آمدید</h1>
      <p className="text-lg text-gray-400 mb-10">بهترین محصولات دیجیتال با تخفیف‌های ویژه</p>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-800 p-4 rounded-xl">📱 گوشی</div>
        <div className="bg-gray-800 p-4 rounded-xl">🎧 هدفون</div>
        <div className="bg-gray-800 p-4 rounded-xl">🧴 ماساژور</div>
        <div className="bg-gray-800 p-4 rounded-xl">📦 کاور گوشی</div>
      </div>
    </main>
  );
}
