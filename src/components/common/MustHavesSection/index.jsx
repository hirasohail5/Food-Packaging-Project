import React, { useState, useLayoutEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const mustHaveProducts = [
  {
    id: "burger-boxes",
    title: "Burger Boxes",
    price: "$0.02 per unit",
    image: "/images/home/explore/cat3.png",
  },
  {
    id: "bakery-boxes",
    title: "Bakery Boxes",
    price: "$0.02 per unit",
    image: "/images/home/explore/cat5.png",
  },
  {
    id: "sandwich-boxes",
    title: "Sandwich Boxes",
    price: "$0.02 per unit",
    image: "/images/home/explore/cat6.png",
  },
  {
    id: "pizza-boxes",
    title: "Pizza Boxes",
    price: "$0.02 per unit",
    image: "/images/home/explore/cat6.png",
  },
];

const MustHavesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [leftOffset, setLeftOffset] = useState(0);
  const containerRef = useRef(null);

  const total = mustHaveProducts.length;

  const recalculate = useCallback(() => {
    if (!containerRef.current) return;
    const width = window.innerWidth;
    const containerWidth = containerRef.current.getBoundingClientRect().width;

    if (width >= 1024) {
      const offset = 230;
      setLeftOffset(offset);
      const availableWidth = containerWidth - offset;
      setCardWidth(availableWidth / 3);
    } else if (width >= 768) {
      const offset = 48;
      setLeftOffset(offset);
      const availableWidth = containerWidth - offset;
      setCardWidth(availableWidth / 2.25);
    } else {
      setLeftOffset(0);
      setCardWidth(containerWidth / 1.35);
    }
  }, []);

  useLayoutEffect(() => {
    recalculate();
    const resizeObserver = new ResizeObserver(() => recalculate());
    if (containerRef.current) resizeObserver.observe(containerRef.current);
    window.addEventListener("resize", recalculate);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", recalculate);
    };
  }, [recalculate]);

  const getVisibleCount = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2.25;
    return 1.35;
  };

  const maxIndex = Math.max(0, total - Math.floor(getVisibleCount()));

  const handlePrev = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

  const translateX = -currentIndex * cardWidth;

  return (
    <section className="relative w-full bg-[#FEF9F4] text-black font-saans pt-4 lg:pt-6 pb-6 lg:pb-10 overflow-hidden">
      <div className="w-full pb-4 lg:pb-6">
        <div className="w-full px-4 sm:px-6 md:pl-[64px] lg:pl-[250px] md:pr-12 flex items-center justify-between">
          <h2 className="font-bold text-[20px] sm:text-[26px] lg:text-[32px] leading-tight text-[#191919]">
            Explore even more <br className="block sm:hidden" />
            must-haves
          </h2>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous product"
              className="w-8 h-8 lg:w-9 lg:h-9 rounded-full border border-[#191919] flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 disabled:opacity-25 disabled:pointer-events-none"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              aria-label="Next product"
              className="w-8 h-8 lg:w-9 lg:h-9 rounded-full border border-[#191919] flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 disabled:opacity-25 disabled:pointer-events-none"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div 
        ref={containerRef} 
        className="w-full border-t border-b border-[#707070] relative flex"
      >
        {leftOffset > 0 ? (
          <div 
            className="absolute top-0 bottom-0 z-20 pointer-events-none border-r border-[#707070]" 
            style={{ left: `${leftOffset}px` }} 
          />
        ) : (
          <div className="absolute top-0 left-0 bottom-0 border-l border-[#707070] z-20 pointer-events-none" />
        )}

        <div className="w-full relative overflow-x-hidden lg:overflow-visible">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(${leftOffset + translateX}px)`,
            }}
          >
            {mustHaveProducts.map((product) => (
              <div
                key={product.id}
                className="shrink-0 flex flex-col justify-between border-l border-r border-[#707070] pt-6 lg:pt-8 pb-4 px-4 lg:px-6 relative group bg-[#FEF9F4]"
                style={{ width: cardWidth ? `${cardWidth}px` : "auto" }}
              >
                <div className="relative w-full h-[240px] sm:h-[280px] lg:h-[340px] flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 70vw, (max-width: 1024px) 45vw, 33vw"
                  />
                </div>

                <div className="mt-4 flex flex-col gap-0.5">
                  <h3 className="font-bold text-[15px] sm:text-[17px] lg:text-[18px] text-[#191919]">
                    {product.title}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-[#666666]">
                    From <span className="text-[#ED1E29] font-medium">{product.price}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px] pointer-events-none z-30 flex">
          <div style={{ width: `${leftOffset}px` }} className="shrink-0" />
          <div className="flex-1 relative">
            <div
              className="absolute top-0 h-full bg-[#ED1E29] transition-all duration-500 ease-out"
              style={{
                width: `${100 / total}%`,
                left: `${(currentIndex / total) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

mustHaveProducts.forEach((p) => {
  p.id = p.id || "";
});

export default MustHavesSection;