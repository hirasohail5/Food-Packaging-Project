import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
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
];

const GAP = 24; // px, matches gap-6
const LINE = 245; // px from the left edge of the full-width carousel box — matches lg:pl-[245px] used by the heading above, so the line lines up with it
// RIGHT_PAD is no longer a hardcoded guess — it's measured live below via
// rightMarkerRef, because a fixed 48px guess left a small sliver of the
// next card visible on the right in some viewports. Nothing else changed.

// How many FULL cards show to the right of the line:
// >=1280px (desktop) -> 3 full cards
// 1024-1279px (laptop) -> 2 full cards
const getVisibleCount = (width) => {
  if (width >= 1280) return 3;
  return 2;
};

const ProductCategoriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // index into REAL items only, never wraps
  const [containerWidth, setContainerWidth] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [rightPad, setRightPad] = useState(48); // measured live, 48 is just the initial fallback
  const containerRef = useRef(null);
  const rightMarkerRef = useRef(null);

  const total = baseCategories.length;
  const maxIndex = Math.max(0, total - visibleCount);

  // One clone of the LAST real item is prepended, only so a half-card can
  // peek in to the left of the line on the very first screen too.
  // This is NOT an infinite loop — prev/next clamp to real boundaries below.
  const track = useMemo(
    () => [
      { ...baseCategories[total - 1], id: `${baseCategories[total - 1].id}-peek-clone`, _isClone: true },
      ...baseCategories,
    ],
    [total]
  );

  const recalculate = useCallback(() => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    setContainerWidth(containerRect.width);

    if (rightMarkerRef.current) {
      const rightRect = rightMarkerRef.current.getBoundingClientRect();
      setRightPad(containerRect.right - rightRect.right);
    }

    setVisibleCount(getVisibleCount(window.innerWidth));
  }, []);

  useEffect(() => {
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

  // Only the zone to the RIGHT of the line needs to fit "visibleCount" full
  // cards exactly (no +0.5 here — the peek lives to the LEFT of the line,
  // in its own separate space, not stealing room from the full-card zone).
  const availableRightWidth = Math.max(0, containerWidth - LINE - rightPad);
  const cardWidth =
    availableRightWidth > 0
      ? Math.floor((availableRightWidth - (visibleCount - 1) * GAP) / visibleCount)
      : 0;

  const handlePrev = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

  // trackIndex accounts for the single prepended clone.
  const trackIndex = currentIndex + 1;
  // Position track so that the first FULL card starts exactly at the line.
  // Whatever sits one slot before it (the peek/clone) then lands with its
  // right edge just short of the line — always left of it, never crossing.
  const translateX = LINE - trackIndex * (cardWidth + GAP);

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
      </div>

      {/* Mobile grid — unchanged */}
      <div className="block lg:hidden px-6 md:px-[80px]">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6">
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

      
      <div className="hidden lg:block w-full overflow-hidden">
        <div className="relative">
          <div
            className="absolute top-0 bottom-0 w-px bg-[#E0E0E0] z-10"
            style={{ left: `${LINE}px` }}
          />
          <div ref={containerRef} className="w-full overflow-hidden relative">
            
            <div className="absolute inset-0 lg:pr-12 pointer-events-none" aria-hidden="true">
              <div ref={rightMarkerRef} className="absolute right-0 top-0 h-px w-px" />
            </div>

            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(${translateX}px)` }}
            >
              {track.map((cat, index) => (
                <div
                  key={`${cat.id}-${index}`}
                  className="shrink-0 flex flex-col gap-3"
                  style={{ width: cardWidth ? `${cardWidth}px` : undefined }}
                >
                  <div className="relative w-full h-[466px] rounded-[15px] overflow-hidden bg-[#EAEAEA]">
                    <Image src={cat.image} alt={cat.title} fill className="object-cover" />
                  </div>
                  <span className="font-medium text-[18px] text-black">{cat.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block w-full lg:pl-[245px] lg:pr-12 mt-12">
        <div className="w-full h-[2px] bg-[#E0E0E0] relative">
          <div
            className="h-full bg-[#ED1E29] transition-all duration-300"
            style={{
              width: `${(visibleCount / total) * 100}%`,
              transform: `translateX(${
                maxIndex === 0 ? 0 : (currentIndex / maxIndex) * (100 / visibleCount) * (total - visibleCount)
              }%)`,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductCategoriesSection;