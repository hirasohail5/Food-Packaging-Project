import Image from "next/image";
import Link from "next/link";

const categories = ["Pizza Boxes", "Burger Boxes", "Takeout Boxes", "Bakery Boxes"];

const BannerCom = () => {
  return (
    <section className="relative w-full h-[85vh] min-h-[550px] max-h-[900px] overflow-hidden font-saans">
      <Image
        src="/images/home/banner/bannerDesktop.webp"
        alt="Custom food packaging banner"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      
      <div className="absolute inset-x-0 bottom-8 sm:bottom-12 flex flex-col justify-end px-5 sm:px-10 lg:pl-[245px] lg:pr-12 max-w-[1920px] mx-auto z-10">
        <div className="max-w-[580px]">
          <h1 className="text-white font-semibold text-[32px] leading-[38px] sm:text-[45px] sm:leading-[50px] lg:text-[65px] lg:leading-[60px] tracking-[0.66px] lg:tracking-[1.43px] drop-shadow-md">
            Custom boxes
          </h1>

          <p className="text-white/95 text-[13px] leading-[16px] lg:text-[16px] lg:leading-[19px] font-normal drop-shadow mt-5 max-w-[540px]">
            Custom Food Packaging provides tailored solutions for restaurants, bakeries, and food brands.
          </p>

          <ul className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-white text-[13px] leading-[16px] lg:text-[16px] lg:leading-[19px] font-medium mt-5">
            {categories.map((cat, index) => (
              <li key={cat} className="flex items-center gap-3">
                {index >= 0 && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                )}
                <span>{cat}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 sm:mt-6">
            <Link
              href="/collection"
              className="inline-flex items-center gap-2.5 bg-[#ED1E29] hover:bg-red-700 transition-colors text-white font-medium text-[13px] lg:text-[14px] h-[40px] lg:h-[45px] px-6 rounded-[25px] shadow-lg"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
              <span>Browse All Products</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerCom;