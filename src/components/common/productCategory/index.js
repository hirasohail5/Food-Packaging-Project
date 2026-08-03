import React, { useState, useEffect, useLayoutEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const baseCategories = [
  {
    id: "custom-boxes",
    title: "Custom Boxes",
    image: "/images/home/products/burgeBoxes.png",
  },
  {
    id: "pouches",
    title: "Pouches",
    image: "/images/home/products/pastryBoxes.webp",
  },
  {
    id: "bags",
    title: "Bags",
    image: "/images/home/products/burgeBoxes.png",
  },
  {
    id: "stickers-labels",
    title: "Stickers/Labels",
    image: "/images/home/products/pastryBoxes.webp",
  },
  {
    id: "custom-boxes",
    title: "Custom Boxes",
    image: "/images/home/products/burgeBoxes.png",
  },
];

// 8px Gap
const GAP = 8;

const getLine = (width) => (width >= 1024 ? 245 : 80);

const getVisibleCount = (width) => {
  if (width >= 1024) return 3;
  if (width >= 768) return 4;
  return 2;
};

const getShowPeek = (width) => width >= 1024;

const ProductCategoriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [line, setLine] = useState(245);
  const [showPeek, setShowPeek] = useState(true);
  const [rightPad, setRightPad] = useState(48);
  const containerRef = useRef(null);
  const rightMarkerRef = useRef(null);

  const total = baseCategories.length;
  const maxIndex = Math.max(0, total - visibleCount);

  const recalculate = useCallback(() => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    setContainerWidth(containerRect.width);

    if (rightMarkerRef.current) {
      const rightRect = rightMarkerRef.current.getBoundingClientRect();
      setRightPad(containerRect.right - rightRect.right);
    }

    setVisibleCount(getVisibleCount(window.innerWidth));
    setLine(getLine(window.innerWidth));
    setShowPeek(getShowPeek(window.innerWidth));
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

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const availableRightWidth = Math.max(0, containerWidth - line - rightPad);
  const cardWidth =
    availableRightWidth > 0
      ? Math.floor((availableRightWidth - (visibleCount - 1) * GAP) / visibleCount)
      : 0;

  const handlePrev = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

  const track = showPeek
    ? [
        { ...baseCategories[total - 1], id: `${baseCategories[total - 1].id}-peek-clone` },
        ...baseCategories,
      ]
    : baseCategories;
  const trackIndex = showPeek ? currentIndex + 1 : currentIndex;

  const translateX = showPeek
    ? line - trackIndex * (cardWidth + GAP) - (GAP / 2 + 6)
    : line - trackIndex * (cardWidth + GAP);

  
  const progressPercentage = maxIndex === 0 ? 100 : ((currentIndex + 1) / (maxIndex + 1)) * 100;

  return (
    <section className="relative w-full bg-[#FEF9F4] text-black font-saans pt-10 lg:pt-10 pb-10 lg:pb-20 overflow-hidden">
      <div className="w-full px-6 md:px-[80px] lg:pl-[245px] lg:pr-12">
        {/* Laptop / Mobile Header */}
        <div className="w-full flex flex-col md:hidden lg:flex lg:flex-row lg:items-end justify-between gap-4 lg:gap-6 mb-8 lg:mb-12">
          <div className="max-w-[515px] lg:max-w-[650px]">
            <h2 className="font-bold text-[24px] leading-[29px] lg:text-[45px] lg:leading-[53px] lg:font-bold text-[#191919] lg:text-black">
              Custom Food Packaging, Made for Every Brand
            </h2>
          </div>

          <div className="flex flex-col lg:items-end gap-4 lg:gap-3">
            <p className="max-w-[300px] sm:max-w-[343px] lg:max-w-[420px] font-normal text-[14px] leading-[18px] lg:text-[18px] lg:leading-[24px] text-left text-[#191919]">
              From boxes to bags, cups to wraps{" "}
              <br className="hidden lg:inline" />
              everything you need to pack it right, in style
            </p>

            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="w-[36px] h-[36px] rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 disabled:opacity-30 disabled:pointer-events-none"
                aria-label="Previous slide"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === maxIndex}
                className="w-[36px] h-[36px] rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 disabled:opacity-30 disabled:pointer-events-none"
                aria-label="Next slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Tablet Header */}
        <div className="hidden md:flex lg:hidden w-full items-center justify-between gap-6 mb-8">
          <div className="max-w-[420px]">
            <h2 className="font-bold text-[32px] leading-[38px] text-black mb-3">
              Custom Food Packaging, Made for Every Brand
            </h2>
            <p className="max-w-[335px] font-normal text-[14px] leading-[18px] text-[#191919]">
              From boxes to bags, cups to wraps everything you need to pack it right, in style
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-[36px] h-[36px] rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className="w-[36px] h-[36px] rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Next slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Grid */}
      <div className="block md:hidden px-6">
        <div className="grid grid-cols-2 gap-x-2 gap-y-4">
          {baseCategories.map((cat) => (
            <div key={cat.id} className="flex flex-col gap-2">
              <div className="relative w-full aspect-square rounded-[15px] overflow-hidden bg-[#EAEAEA]">
                <Image src={cat.image} alt={cat.title} fill className="object-cover" />
              </div>
              <span className="font-medium text-[14px] md:text-[16px] text-black">
                {cat.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Track */}
      <div className="hidden md:block w-full overflow-hidden">
        <div className="relative">
          <div ref={containerRef} className="w-full overflow-hidden relative">
            <div className="absolute inset-0 md:pr-12 pointer-events-none" aria-hidden="true">
              <div ref={rightMarkerRef} className="absolute right-0 top-0 h-px w-px" />
            </div>

            <div
              className="flex gap-2 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(${translateX}px)` }}
            >
              {track.map((cat, index) => (
                <div
                  key={`${cat.id}-${index}`}
                  className="shrink-0 flex flex-col gap-3"
                  style={{ width: cardWidth ? `${cardWidth}px` : undefined }}
                >
                  <div className="relative w-full h-[200px] md:h-[220px] lg:h-[466px] rounded-[15px] overflow-hidden bg-[#EAEAEA]">
                    <Image src={cat.image} alt={cat.title} fill className="object-cover" />
                  </div>
                  <span className="font-medium text-[14px] md:text-[15px] lg:text-[18px] text-black">{cat.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block w-full md:px-[80px] lg:pl-[245px] lg:pr-12 mt-12">
        <div className="w-full h-[2px] bg-[#E0E0E0] relative">
          <div
            className="h-full bg-[#ED1E29] transition-all duration-300 ease-out"
            style={{
              width: `${progressPercentage}%`,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductCategoriesSection;