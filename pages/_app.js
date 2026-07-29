// pages/_app.js
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <div className="relative min-h-screen">
      {/* Global Vertical Line: Dark Grey & Slightly Thicker */}
      <div className="hidden lg:block fixed top-0 left-[230px] w-[1.5px] h-full bg-gray-400/80 pointer-events-none z-20" />

      <Component {...pageProps} />
    </div>
  );
}