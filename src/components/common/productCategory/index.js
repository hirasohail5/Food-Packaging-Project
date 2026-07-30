import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const baseCategories = [
  {
    id: "custom-boxes",
    title: "Custom Boxes",
    image: "/images/home/products/custom-boxes.webp",
  },
  {
    id: "pouches",
    title: "Pouches",
    image: "/images/home/products/pouches.webp",
  },
  {
    id: "bags",
    title: "Bags",
    image: "/images/home/products/bags.webp",
  },
  {
    id: "stickers-labels",
    title: "Stickers/Labels",
    image: "/images/home/products/stickers.webp",
  },
];

// Repeating list for infinite carousel on desktop
const desktopCategories = [
  ...baseCategories,
  ...baseCategories,
  ...baseCategories,
  ...baseCategories,
];

const ProductCategoriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? baseCategories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % baseCategories.length);
  };

  return (
    <section className="relative w-full bg-[#FEF9F4] text-black font-saans py-10 lg:py-20 overflow-hidden">
      <div className="w-full px-6 md:px-[80px] lg:pl-[245px] lg:pr-12">
        <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-4 lg:gap-6 mb-8 lg:mb-12">
          <div className="max-w-[515px]">
            <h2 className="font-medium text-[24px] leading-[29px] md:text-[32px] md:leading-[38px] lg:text-[45px] lg:leading-[53px] text-[#191919]">
              Custom Food Packaging, Made for Every Brand
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
            <p className="max-w-[343px] font-normal text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] text-[#191919]">
              From boxes to bags, cups to wraps everything you need to pack it right, in style
            </p>

            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <button
                onClick={handlePrev}
                className="w-[36px] h-[36px] rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200"
                aria-label="Previous slide"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="w-[36px] h-[36px] rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200"
                aria-label="Next slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:hidden px-6 md:px-[80px]">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6">
          {baseCategories.map((cat) => (
            <div key={cat.id} className="flex flex-col gap-2">
              <div className="relative w-full aspect-square rounded-[15px] overflow-hidden bg-[#EAEAEA]">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-medium text-[14px] md:text-[16px] text-black">
                {cat.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:block w-full pl-[245px] overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(calc(-${currentIndex} * (560px + 24px)))`,
          }}
        >
          {desktopCategories.map((cat, index) => (
            <div
              key={`${cat.id}-${index}`}
              className="w-[560px] shrink-0 flex flex-col gap-3"
            >
              <div className="relative w-full h-[466px] rounded-[15px] overflow-hidden bg-[#EAEAEA]">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-medium text-[18px] text-black">
                {cat.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:block w-full lg:pl-[245px] lg:pr-12 mt-12">
        <div className="w-full h-[2px] bg-[#E0E0E0] relative">
          <div
            className="h-full bg-[#ED1E29] transition-all duration-300"
            style={{
              width: `${100 / baseCategories.length}%`,
              transform: `translateX(${currentIndex * 100}%)`,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductCategoriesSection;