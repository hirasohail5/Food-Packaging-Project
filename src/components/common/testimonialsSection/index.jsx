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
  const [slideDirection, setSlideDirection] = useState("enter"); // 'enter', 'leaving'

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideDirection("leaving");
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setSlideDirection("enter");
      }, 600); 
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], originalIndex: index });
    }
    return visible;
  };

  const visibleCards = getVisibleTestimonials();

  const progressPercentage = ((currentIndex + 1) / testimonials.length) * 100;

  const starBadgeClipPath =
    "polygon(50% 0%, 57.4% 12.7%, 69.1% 3.8%, 71.1% 18.4%, 85.4% 14.6%, 81.6% 28.9%, 96.2% 30.9%, 87.3% 42.6%, 100% 50%, 87.3% 57.4%, 96.2% 69.1%, 81.6% 71.1%, 85.4% 85.4%, 71.1% 81.6%, 69.1% 96.2%, 57.4% 87.3%, 50% 100%, 42.6% 87.3%, 30.9% 96.2%, 28.9% 81.6%, 14.6% 85.4%, 18.4% 71.1%, 3.8% 69.1%, 12.7% 57.4%, 0% 50%, 12.7% 42.6%, 3.8% 30.9%, 18.4% 28.9%, 14.6% 14.6%, 28.9% 18.4%, 30.9% 3.8%, 42.6% 12.7%)";

  return (
    <section className="relative w-full bg-[#FEF9F4] text-black font-['Saans-TRIAL',sans-serif] pt-12 lg:pt-16 pb-16 lg:pb-24 overflow-hidden">
      
      <div className="w-full px-4 lg:px-0 lg:grid lg:grid-cols-[230px_1fr]">
        <div className="hidden lg:block" />

        <div className="w-full lg:pl-12 lg:pr-12">
          <div className="mb-20 lg:mb-24">
            <h2 className="font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-tight text-[#191919] mb-3">
              Voices of Our Customers
            </h2>
            <p className="text-[18px] text-black max-w-xl font-['Saans-TRIAL',sans-serif] font-medium text-left">
              Real stories from the cafés, bakeries, and brands that trust us<br /> with their packaging.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start relative min-h-[420px]">
            {visibleCards.map((item, idx) => {
              const isCardUp = idx === 0 || idx === 2;

              return (
                <div
                  key={`${item.id}-${currentIndex}`}
                  className={`w-full transition-all duration-700 ease-in-out transform ${
                    isCardUp ? "md:-translate-y-6" : "md:translate-y-6"
                  } ${
                    slideDirection === "leaving"
                      ? "-translate-x-16 opacity-0"
                      : "translate-x-0 opacity-100"
                  }`}
                  style={{ transitionDuration: "700ms" }}
                >
                  <div className="w-full relative bg-[#FBF4EA] border border-[#707070] rounded-2xl p-8 shadow-[14px_14px_0px_0px_rgba(0,0,0,0.12)] flex flex-col justify-between h-[380px]">

                    {idx === 0 && (
                      <span className="absolute -top-4 right-6 text-black text-5xl select-none pointer-events-none">✦</span>
                    )}
                    {idx === 2 && (
                      <span className="absolute -bottom-4 right-6 text-black text-5xl select-none pointer-events-none">✦</span>
                    )}

                    <div>
                      <div className="flex gap-0.5 mb-6">
                        {[...Array(item.rating)].map((_, i) => (
                          <svg
                            key={i}
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="#ED1E29"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12 2.5l2.76 6.2 6.74.6-5.1 4.5 1.53 6.6L12 16.9l-5.93 3.5 1.53-6.6-5.1-4.5 6.74-.6L12 2.5z" />
                          </svg>
                        ))}
                      </div>

                      <p
                        className="text-[#191919] text-left"
                        style={{
                          fontFamily: "'Saans-TRIAL', sans-serif",
                          fontWeight: 500,
                          fontSize: "18px",
                          lineHeight: 1.6,
                          textAlign: "left",
                        }}
                      >
                        {item.text}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-4">
                      <div
                        className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold text-xs tracking-wider shrink-0"
                        style={{ clipPath: starBadgeClipPath }}
                      >
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

          <div className="mt-20 w-full">
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