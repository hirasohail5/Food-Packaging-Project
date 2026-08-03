import React, { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    id: "q1",
    question: "Can I order custom packaging in small quantities?",
    answer: "Yes! We offer flexible minimums so businesses of all sizes can get started.",
  },
  {
    id: "q2",
    question: "How long does production and delivery take?",
    answer: "Typically, production takes 8-10 business days, and delivery takes an additional 3-5 days depending on your location.",
  },
  {
    id: "q3",
    question: "Do you offer design assistance if I don't have artwork?",
    answer: "Yes, we provide free design support to help you lay out your logos, graphics, and select colors.",
  },
  {
    id: "q4",
    question: "What materials are available for packaging?",
    answer: "We use food-safe cardboard, kraft paper, coated paper, and food-grade mylar films.",
  },
  {
    id: "q5",
    question: "How can I track my order?",
    answer: "Once your order ships, we will email you a tracking link to monitor your delivery status in real-time.",
  },
];

const FAQSection = () => {
  const [activeId, setActiveId] = useState("q1");

  const handleToggle = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative w-full bg-[#FEF9F4] text-black font-['Saans-TRIAL',sans-serif] pt-8 lg:pt-12 pb-10 lg:pb-16 overflow-hidden">
      
      <div
        className="hidden lg:block absolute top-0 bottom-0 z-25 pointer-events-none border-r border-[#707070]"
        style={{ left: "230px" }}
      />

      <div className="w-full text-center px-4 lg:pl-[230px] mb-8 lg:mb-10">
        <p className="text-[12px] sm:text-[14px] text-black tracking-wider mb-2 font-['Saans-TRIAL',sans-serif]">
          You ask, we answer
        </p>
        <h2 className="font-bold text-[28px] sm:text-[36px] lg:text-[44px] leading-tight text-[#191919]">
          Most Common <br /> Questions
        </h2>
      </div>

      
      <div className="w-full relative flex flex-col xl:flex-row items-start justify-between">
        
        
        <div className="w-full flex flex-col items-center md:items-start gap-1.5 px-4 sm:px-6 md:px-16 mx-auto md:mx-0 lg:pl-[294px] xl:w-auto xl:pl-[380px]">
          {faqs.map((faq) => {
            const isActive = activeId === faq.id;
            return (
              <div key={faq.id} className="flex flex-col items-center md:items-start gap-1.5 w-full xl:w-auto">
                <div
                  onClick={() => handleToggle(faq.id)}
                  className={`cursor-pointer text-[14px] sm:text-[15px] px-6 py-2.5 rounded-full w-[92%] sm:w-[420px] xl:w-[480px] max-w-full transition-all duration-300 shadow-sm flex items-center justify-between font-['Saans-TRIAL',sans-serif] ${
                    isActive
                      ? "bg-[#191919] text-white font-medium shadow-md"
                      : "border border-[#707070] text-[#191919] bg-[#FEF9F4] hover:bg-[#EAE4DC]/40"
                  }`}
                >
                  <span>{faq.question}</span>
                </div>

                <div 
                  className={`grid w-[92%] sm:w-[420px] md:w-full xl:w-auto max-w-full transition-all duration-300 ease-in-out overflow-hidden ${
                    isActive && faq.answer ? "grid-rows-[1fr] opacity-100 mb-1" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="flex items-center gap-3 pt-1 justify-center md:justify-end xl:justify-start xl:pl-20">
                      <div className="bg-[#ED1E29] text-white text-[14px] sm:text-[15px] px-6 py-2.5 rounded-full w-fit max-w-[85%] sm:max-w-[440px] xl:max-w-[480px] 2xl:max-w-[650px] whitespace-normal shadow-sm font-['Saans-TRIAL',sans-serif]">
                        {faq.answer}
                      </div>
                      <div className="w-9 h-9 rounded-full border border-[#191919] bg-[#FEF9F4] flex items-center justify-center shrink-0 overflow-hidden shadow-sm">
                        <span className="text-xs">👤</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="mt-1">
            <button className="group inline-flex items-center gap-2.5 bg-[#191919] text-white text-[13px] font-medium px-6 py-2.5 rounded-full hover:bg-[#191919] transition-colors duration-200 shadow-sm font-['Saans-TRIAL',sans-serif]">
              <span className="w-1.5 h-1.5 rounded-full bg-white transition-all duration-200 group-hover:hidden" />
              <span>More Answers</span>
              <span className="hidden group-hover:inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </button>
          </div>
        </div>

        
        <div className="hidden xl:flex xl:w-[260px] 2xl:w-[420px] justify-end shrink-0 pr-0 xl:absolute xl:bottom-0 xl:right-0">
          <div className="relative w-[280px] sm:w-[350px] lg:w-[400px] xl:w-[260px] 2xl:w-[400px] h-[300px] sm:h-[360px] xl:h-[240px] 2xl:h-[360px]">
            <Image
              src="/images/home/explore/cat8.png" 
              alt="FAQ character illustration"
              fill
              className="object-contain object-right object-bottom"
              sizes="400px"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;