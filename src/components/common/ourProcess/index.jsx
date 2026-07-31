import React from "react";
import Image from "next/image";

const processSteps = [
  {
    id: "order",
    title: "Order",
    desc: "You can place the custom order directly through our website.",
    bgColor: "bg-[#4CAF50]",
    shapeClass: "rounded-full w-[150px] sm:w-[190px] lg:w-[205px] h-[150px] sm:h-[190px] lg:h-[205px]",
    textAlign: "text-center",
    paddingClass: "px-2 sm:px-4",
  },
  {
    id: "design",
    title: "Design",
    desc: "Please choose from our portfolio of custom designs or provide a certain layout, pattern, logo, or artwork.",
    bgColor: "bg-[#FFA726]",
    shapeClass: "rounded-[24px] sm:rounded-[32px] w-[150px] sm:w-[190px] lg:w-[222px] h-[150px] sm:h-[190px] lg:h-[205px]",
    textAlign: "text-left",
    paddingClass: "pl-3 sm:pl-5 pr-3 sm:pr-4",
  },
  {
    id: "approve",
    title: "Approve",
    desc: "You will get an email as a confirmation once you finalize the custom design.",
    bgColor: "bg-[#42A5F5]",
    isCustomArrow: true,
  },
  {
    id: "production",
    title: "Production",
    desc: "Our team will develop the custom boxes tailor-made to your exclusive designs",
    bgColor: "bg-[#688A9E]",
    shapeClass: "rounded-[24px] sm:rounded-[32px] w-[150px] sm:w-[190px] lg:w-[222px] h-[150px] sm:h-[190px] lg:h-[205px]",
    textAlign: "text-left",
    paddingClass: "pl-3 sm:pl-5 pr-3 sm:pr-4",
  },
  {
    id: "delivery",
    title: "Delivery",
    desc: "You will get the order delivered within two weeks after your confirmation",
    bgColor: "bg-[#E5483D]",
    shapeClass: "rounded-full w-[150px] sm:w-[190px] lg:w-[205px] h-[150px] sm:h-[190px] lg:h-[205px]",
    textAlign: "text-center",
    paddingClass: "px-2 sm:px-4",
  },
];

const logos = [
  { name: "Binoid", src: "/images/home/logos/logo1.webp" },
  { name: "Half Bak'd", src: "/images/home/logos/logo2.webp" },
  { name: "Faded", src: "/images/home/logos/logo3.webp" },
  { name: "Not Ya Son's Weed", src: "/images/home/logos/logo4.webp" },
  { name: "Ignite", src: "/images/home/logos/logo5.webp" },
  { name: "Modus", src: "/images/home/logos/logo6.webp" },
  { name: "Stoned", src: "/images/home/logos/logo7.webp" },
  { name: "Native Extracts", src: "/images/home/logos/logo8.webp" },
];

const ProcessSection = () => {
  return (
    <section className="relative w-full bg-[#FEF9F4] text-black font-['Saans-TRIAL',sans-serif] py-6 lg:py-8 overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8 relative">

        <div className="w-full bg-[#FBF4EA] rounded-t-[24px] lg:rounded-t-[36px] rounded-b-[24px] lg:rounded-b-[36px] pt-12 pb-0 lg:pt-16 flex flex-col justify-between relative overflow-hidden shadow-sm">

          <div className="w-full px-6 sm:px-8 md:pl-[64px] lg:pl-[210px] lg:pr-16 flex flex-col xl:flex-row justify-between items-start gap-8 xl:gap-12">

            <div className="flex flex-col max-w-[650px]">
              <span className="text-[14px] sm:text-[16px] text-black font-medium mb-3 font-['Saans-TRIAL',sans-serif]">
                Our Process
              </span>
              <h2 className="text-[28px] sm:text-[40px] xl:text-[48px] font-bold leading-[1.15] sm:leading-[1.08] text-black font-['SF_Pro_Display','SF_Pro',sans-serif] tracking-tight">
                <span className="xl:whitespace-nowrap">
                  From concept to delivery,
                  <sup className="hidden xl:inline-flex xl:ml-2 items-center justify-center w-[24px] h-[24px] text-[13px] align-top font-normal border border-black rounded-full -translate-y-1">
                    ®
                  </sup>
                </span>
                <br className="hidden sm:inline" />
                we make packaging easy
              </h2>
            </div>

            <div className="flex flex-col items-start gap-5 max-w-[450px] shrink-0 xl:ml-auto xl:pt-[32px]">
              <p className="text-[14.5px] sm:text-[15.5px] lg:text-[16px] text-black leading-relaxed font-['Saans-TRIAL',sans-serif]">
                We follow a simple, transparent process that takes your idea from
                concept to finished packaging ensuring quality, consistency, and
                speed at every stage
              </p>

              <button className="group inline-flex items-center gap-2.5 bg-[#ED1E29] text-white text-[14px] sm:text-[15px] font-medium px-5 py-2.5 rounded-full transition-colors duration-200 font-['Saans-TRIAL',sans-serif]">
                <span className="w-1.5 h-1.5 rounded-full bg-white transition-all duration-200 group-hover:hidden" />
                <span>Shop now</span>
                <span className="hidden group-hover:inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </button>
            </div>
          </div>

          <div className="w-full px-6 sm:px-8 md:pl-[64px] lg:pl-[210px] lg:pr-16 my-12 lg:my-16">
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-5 lg:gap-5">
              {processSteps.map((step, index) => {
                const isLastItem = index === processSteps.length - 1;

                if (step.isCustomArrow) {
                  return (
                    <div
                      key={step.id}
                      className="relative text-black flex flex-col justify-center items-center shadow-sm w-full sm:w-[190px] lg:w-[233px] h-[150px] sm:h-[190px] lg:h-[205px] shrink-0"
                    >
                      <svg
                        className="absolute inset-0 w-full h-full text-[#42A5F5]"
                        viewBox="0 0 200 200"
                        preserveAspectRatio="none"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24 0H140C148 0 156 4 161 11L197.5 95C200 99 200 101 197.5 105L161 189C156 196 148 200 140 200H24C10.7452 200 0 189.255 0 176V24C0 10.7452 10.7452 0 24 0Z"
                          fill="currentColor"
                        />
                      </svg>
                      <div className="relative z-10 w-full text-left pl-5 sm:pl-7 pr-12 sm:pr-14">
                        <h3 className="font-bold text-[14px] sm:text-[16.5px] lg:text-[17.5px] mb-1 text-black font-['SF_Pro_Display','SF_Pro',sans-serif]">
                          {step.title}
                        </h3>
                        <p className="text-[10px] sm:text-[11px] lg:text-[11.8px] leading-tight text-black font-medium opacity-95 font-['Saans-TRIAL',sans-serif]">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={step.id}
                    className={`${step.bgColor} ${step.shapeClass} text-black p-3.5 lg:p-4 flex flex-col justify-center items-center shadow-sm shrink-0 ${
                      isLastItem ? "col-span-2 mx-auto sm:mx-0" : ""
                    }`}
                  >
                    <div className={`w-full ${step.textAlign || "text-center"} ${step.paddingClass || ""}`}>
                      <h3 className="font-bold text-[14px] sm:text-[16.5px] lg:text-[17.5px] mb-1 text-black font-['SF_Pro_Display','SF_Pro',sans-serif]">
                        {step.title}
                      </h3>
                    </div>
                    <div className={`w-full ${step.textAlign || "text-center"} ${step.paddingClass || ""}`}>
                      <p className={`text-[10px] sm:text-[11px] lg:text-[11.8px] leading-tight text-black font-medium opacity-95 font-['Saans-TRIAL',sans-serif] ${step.textAlign === "text-center" ? "max-w-[130px] sm:max-w-[140px] mx-auto" : ""}`}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className="w-full bg-[#FEF9F4] px-6 sm:px-8 md:pl-[64px] lg:pl-[210px] lg:pr-16 py-10 lg:py-10 border-l border-r border-b rounded-b-[24px] lg:rounded-b-[36px] flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-0 relative overflow-hidden"
            style={{ borderColor: "#D1D5DB", borderTopColor: "#FBF4EA" }}
          >

            <div className="shrink-0 w-full lg:w-[180px] lg:pr-4 z-10 text-center lg:text-left">
              <p className="text-[14px] sm:text-[14px] font-bold text-black leading-tight font-['SF_Pro_Display','SF_Pro',sans-serif]">
                Collabs We're Proud to Carry
              </p>
            </div>

            <div className="relative w-full flex-1 overflow-hidden flex items-center group">
              <div className="flex gap-10 lg:gap-16 items-center animate-marquee whitespace-nowrap shrink-0">
                {logos.concat(logos).map((logo, idx) => (
                  <div
                    key={`${logo.name}-${idx}`}
                    className="relative h-7 sm:h-9 w-24 sm:w-28 shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-85 hover:opacity-100"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;