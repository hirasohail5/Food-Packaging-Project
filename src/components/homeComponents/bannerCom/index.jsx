import Image from "next/image";
import Link from "next/link";

const categories = ["Pizza Boxes", "Burger Boxes", "Takeout Boxes", "Bakery Boxes"];

const BannerCom = () => {
  return (
    <section className="relative w-full h-[580px] sm:h-[620px] lg:h-[680px] overflow-hidden">
      {/* Background Image: Mobile par focal point top/center align kiya hai taake box center me rahay */}
      <Image
        src="/images/home/banner/bannerDesktop.webp"
        alt="Custom food packaging banner"
        fill
        priority
        className="object-cover object-center sm:object-center"
      />

      {/* Dark gradient taake mobile par text product/background ke upar clearly readable ho */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 sm:from-black/60 sm:via-black/20" />

      {/* Content Container */}
      <div className="absolute inset-x-0 bottom-6 sm:bottom-10 flex flex-col justify-end px-5 sm:px-12 lg:px-24 xl:px-72">
        <div className="max-w-[520px]">
          <h1 className="text-white font-bold text-2xl sm:text-4xl lg:text-[42px] mb-2 drop-shadow-md">
            Custom boxes
          </h1>

          <p className="text-white/95 text-xs sm:text-[15px] mb-3 sm:mb-4 leading-relaxed drop-shadow">
            Custom Food Packaging provides tailored solutions for restaurants,
            bakeries, and food brands.
          </p>

          <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-white/90 text-xs sm:text-sm mb-5">
            {categories.map((cat) => (
              <li key={cat} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-white shrink-0" />
                {cat}
              </li>
            ))}
          </ul>

          <Link
            href="/collection"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-700 transition text-white text-xs sm:text-sm font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-full"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
            Browse All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BannerCom;