import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: '"The quality of these custom mylar bags is unmatched. Our products stay fresh and the design is always spot on. Our customers love the packaging just as much as the product!"',
    author: "Jessica L.",
    role: "Organic Snack Brand",
    initials: "JL",
  },
  {
    id: 2,
    rating: 5,
    text: '"I needed mylar bags with resealing features to keep my snacks fresh. Got what I wanted plus my own artwork for classy looks."',
    author: "Amanda Clark.",
    role: "Organic Snack Brand",
    initials: "AC",
  },
  {
    id: 3,
    rating: 5,
    text: '"I was a little sceptical that mylar bags would not be of good quality. But I was very wrong. They are thick, protective, and fit my product just fine."',
    author: "David Brown.",
    role: "Organic Snack Brand",
    initials: "DB",
  },
  {
    id: 4,
    rating: 5,
    text: '"Super fast turnaround and incredible print quality. These pouches completely elevated our brand presentation on retail shelves!"',
    author: "Michael Scott.",
    role: "Coffee Roasters",
    initials: "MS",
  },
  {
    id: 5,
    rating: 5,
    text: '"The custom sizing and barrier protection are top-notch. Our dry goods have never stayed fresher for this long."',
    author: "Sarah Jenkins.",
    role: "Artisan Teas",
    initials: "SJ",
  },
  {
    id: 6,
    rating: 5,
    text: '"Exceptional customer support guiding us through the template setup. Truly a seamless experience from proofing to delivery."',
    author: "Elena Rostova.",
    role: "Spice Co.",
    initials: "ER",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Slower auto-slide interval (e.g., every 5.5 seconds) with slide-out effect
  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 500); // matches transition timing
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  // Get exactly 3 visible testimonials in sequence (looping around if needed)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], originalIndex: index });
    }
    return visible;
  };

  const visibleCards = getVisibleTestimonials();

  // Progress bar calculation based on current slide step (1 to 6)
  const progressPercentage = ((currentIndex + 1) / testimonials.length) * 100;

  return (
    <section className="relative w-full bg-[#FEF9F4] text-black font-['Saans-TRIAL',sans-serif] pt-12 lg:pt-16 pb-16 lg:pb-24 overflow-hidden">
      {/* Vertical grid line fully aligned with previous sections */}
      <div
        className="hidden lg:block absolute top-0 bottom-0 z-25 pointer-events-none border-r border-[#707070]"
        style={{ left: "230px" }}
      />

      {/* Header aligned with the grid system */}
      <div className="w-full px-4 lg:pl-[230px] mb-12 lg:mb-16">
        <div className="max-w-7xl">
          <h2 className="font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-tight text-[#191919] mb-3">
            Voices of Our Customers
          </h2>
          <p className="text-[14px] sm:text-[16px] text-[#666666] max-w-xl font-['Saans-TRIAL',sans-serif]">
            Real stories from the cafés, bakeries, and brands that trust us with their packaging.
          </p>
        </div>
      </div>

      {/* Testimonials Container aligned from the left line to the right edge */}
      <div className="w-full px-4 lg:pl-[230px] lg:pr-12">
        <div className="max-w-7xl">
          {/* Cards Grid: Staggered vertical heights matching the reference layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative min-h-[420px]">
            {visibleCards.map((item, idx) => {
              // Stagger pattern: Card 0 and 2 are lower/standard, Card 1 is shifted higher
              const isMiddleCard = idx === 1;

              return (
                <div
                  key={`${item.id}-${currentIndex}`}
                  className={`transition-all duration-700 ease-in-out transform ${
                    isMiddleCard ? "md:-translate-y-8" : "md:translate-y-6"
                  } ${
                    isAnimating
                      ? "-translate-x-10 opacity-0"
                      : "translate-x-0 opacity-100"
                  }`}
                  style={{ transitionDuration: "700ms" }}
                >
                  <div className="relative bg-[#FBF4EA] border border-[#707070] rounded-2xl p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] flex flex-col justify-between h-[380px]">
                    
                    {/* Top-right decorative star/cross anchor */}
                    {idx === 0 && (
                      <span className="absolute -top-3 right-6 text-black text-xl select-none pointer-events-none">✦</span>
                    )}
                    {idx === 2 && (
                      <span className="absolute -bottom-3 right-6 text-black text-xl select-none pointer-events-none">✦</span>
                    )}

                    {/* Card Content */}
                    <div>
                      {/* Rating Stars */}
                      <div className="flex gap-1 mb-6 text-[#ED1E29]">
                        {[...Array(item.rating)].map((_, i) => (
                          <span key={i} className="text-lg">★</span>
                        ))}
                      </div>

                      {/* Review Text */}
                      <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#191919] font-['Saans-TRIAL',sans-serif]">
                        {item.text}
                      </p>
                    </div>

                    {/* Author Details */}
                    <div className="flex items-center gap-3 pt-6 border-t border-[#EFE9E1]">
                      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs tracking-wider shrink-0 shadow-sm">
                        {item.initials}
                      </div>
                      <div>
                        <h4 className="font-bold text-[14px] text-[#191919] leading-tight">
                          {item.author},
                        </h4>
                        <p className="text-[13px] text-[#666666]">{item.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Progress Bar aligning from left boundary to right edge */}
          <div className="mt-16 w-full pr-4 lg:pr-12">
            <div className="w-full h-[2px] bg-[#E5E0DA] relative overflow-hidden">
              <div
                className="absolute top-0 left-0 bottom-0 bg-[#ED1E29] transition-all duration-700 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;