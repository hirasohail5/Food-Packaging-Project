import Image from "next/image";
import Link from "next/link";

const categories = ["Pizza Boxes", "Burger Boxes", "Takeout Boxes", "Bakery Boxes"];

const BannerCom = () => {
  return (
    <section className="relative w-full h-[520px] sm:h-[600px] lg:h-[680px]">
      <Image
        src="/images/home/banner/bannerDesktop.webp"
        alt="Custom food packaging banner"
        fill
        priority
        className="object-cover"
      />

      {/* dark gradient so text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

      <div className="absolute bottom-10 left-0 w-full px-12 sm:px-16 lg:px-72">
        <div className="max-w-[520px]">
          <h1 className="text-white font-bold text-3xl sm:text-4xl lg:text-[42px] mb-2">
            Custom boxes
          </h1>

          <p className="text-white/90 text-sm sm:text-[15px] mb-4 leading-relaxed">
            Custom Food Packaging provides tailored solutions for restaurants,
            bakeries, and food brands.
          </p>

          <ul className="flex flex-wrap gap-x-5 gap-y-1 text-white/90 text-sm mb-6">
            {categories.map((cat) => (
              <li key={cat} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-white" />
                {cat}
              </li>
            ))}
          </ul>

          <Link
            href="/collection"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-700 transition text-white text-sm font-medium px-6 py-3 rounded-full"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            Browse All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BannerCom;
