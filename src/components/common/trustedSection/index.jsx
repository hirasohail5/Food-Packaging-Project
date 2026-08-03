import React, { useState, useLayoutEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const trustedProducts = [
  {
    id: "custom-cake-boxes",
    title: "Custom Cake Boxes",
    price: "$0.02 per unit",
    image: "/images/home/explore/cat3.png",
    tags: ["New", "Best seller"],
  },
  {
    id: "premium-retail-bags",
    title: "Premium Retail Bags",
    price: "$0.02 per unit",
    image: "/images/home/explore/cat5.png",
    tags: [],
  },
  {
    id: "compostable-cold-cups",
    title: "Compostable Cold Cups",
    price: "$0.02 per unit",
    image: "/images/home/explore/cat6.png",
    tags: [],
  },
  {
    id: "pizza-boxes",
    title: "Pizza Boxes",
    price: "$0.02 per unit",
    image: "/images/home/explore/cat6.png",
    tags: ["Best seller"],
  },
];

const TrustedSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [leftOffset, setLeftOffset] = useState(0);
  const containerRef = useRef(null);

  const total = trustedProducts.length;

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
  const progressPercentage = maxIndex === 0 ? 100 : ((currentIndex + 1) / (maxIndex + 1)) * 100;

  return (
    <section className="relative w-full bg-[#FEF9F4] text-black font-saans pt-6 lg:pt-10 pb-6 lg:pb-10 overflow-hidden">
      <div className="w-full pb-6 lg:pb-8">
        <div className="w-full px-4 sm:px-6 md:pl-[64px] lg:pl-[250px] md:pr-16 lg:pr-24 flex flex-col md:flex-row md:items-start justify-between gap-8">
          
          <div className="flex items-center justify-between md:block w-full md:w-auto">
            <div className="flex flex-col gap-3">
              
              <h2 className="font-bold text-[24px] sm:text-[28px] lg:text-[26px] lg:whitespace-nowrap xl:text-[36px] leading-tight text-[#191919]">
                Tried, Tested & Trusted
              </h2>
              <div className="flex items-center gap-6 text-[14px]">
                <span className="flex items-center gap-2 text-[#191919] font-medium cursor-pointer">
                  <span className="w-2 h-2 rounded-full bg-[#ED1E29]"></span> New In
                </span>
                <span className="flex items-center gap-2 text-[#666666] hover:text-[#191919] cursor-pointer transition-colors">
                  <span className="w-2 h-2 rounded-full bg-[#666666]"></span> Most popular
                </span>
              </div>
            </div>

            <div className="flex md:hidden items-center gap-2 shrink-0">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                aria-label="Previous product"
                className="w-8 h-8 rounded-full border border-[#191919] flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors duration-200 disabled:opacity-25 disabled:pointer-events-none"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                aria-label="Next product"
                className="w-8 h-8 rounded-full border border-[#191919] flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors duration-200 disabled:opacity-25 disabled:pointer-events-none"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="hidden md:flex lg:hidden items-center gap-2 self-end">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous product"
              className="w-9 h-9 rounded-full border border-[#191919] flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors duration-200 disabled:opacity-25 disabled:pointer-events-none"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              aria-label="Next product"
              className="w-9 h-9 rounded-full border border-[#191919] flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors duration-200 disabled:opacity-25 disabled:pointer-events-none"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          
          <div className="hidden lg:flex flex-col gap-4 lg:max-w-[260px] xl:max-w-[420px] shrink-0">
            <p className="text-[14px] text-[#666666] leading-relaxed">
              Explore the designs that businesses keep coming back for. These products lead the way in quality, demand, and customer satisfaction a true reflection of what works best in the market.
            </p>

            <div className="flex items-center justify-between">
              <button className="bg-[#ED1E29] text-white text-[13px] font-medium px-5 py-2 rounded-full hover:bg-black transition-colors duration-200">
                View All
              </button>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  aria-label="Previous product"
                  className="w-9 h-9 rounded-full border border-[#191919] flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors duration-200 disabled:opacity-25 disabled:pointer-events-none"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentIndex >= maxIndex}
                  aria-label="Next product"
                  className="w-9 h-9 rounded-full border border-[#191919] flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors duration-200 disabled:opacity-25 disabled:pointer-events-none"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
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
            {trustedProducts.map((product) => (
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

                <div className="mt-4 flex flex-col gap-2">
                  {product.tags.length > 0 && (
                    <div className="flex items-center gap-2">
                      {product.tags.map((tag, idx) => (
                        <span key={idx} className="bg-[#EAE4DC] text-[#191919] text-[11px] px-2.5 py-0.5 rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-[15px] sm:text-[17px] lg:text-[18px] text-[#191919]">
                        {product.title}
                      </h3>
                      <p className="text-[13px] sm:text-[14px] text-[#666666]">
                        From <span className="text-[#ED1E29] font-medium">{product.price}</span>
                      </p>
                    </div>

                    <button aria-label="Bookmark" className="text-[#666666] hover:text-black">
                      <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 2V18L8 14L15 18V2C15 1.44772 14.5523 1 14 1H2C1.44772 1 1 1.44772 1 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px] pointer-events-none z-30 flex">
          <div style={{ width: `${leftOffset}px` }} className="shrink-0" />
          <div className="flex-1 relative">
            <div
              className="absolute top-0 left-0 h-full bg-[#ED1E29] transition-all duration-500 ease-out"
              style={{
                width: `${progressPercentage}%`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;