// pages/_app.js
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Vertical Line: Red Menu ke right edge par locked */}
      <div 
        className="hidden lg:block fixed top-0 left-[230px] w-[1.5px] h-full bg-gray-300/80 pointer-events-none z-30" 
      />

      <Component {...pageProps} />
    </div>
  );
}