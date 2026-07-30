import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const features = [
  {
    id: "free-design",
    title: "Free Design Support",
    icon: "/images/home/approach/freeDesign.webp",
  },
  {
    id: "e-commerce",
    title: "E-Commerce Packaging Solutions",
    icon: "/images/home/approach/eCom.webp",
  },
  {
    id: "eco-friendly",
    title: "Eco-Friendly Packaging",
    icon: "/images/home/approach/ecoFriendly.webp",
  },
  {
    id: "low-moq",
    title: "Low MOQs",
    icon: "/images/home/approach/lowMoqs.webp",
  },
  {
    id: "customer-support",
    title: "Ideal Customer Support",
    icon: "/images/home/approach/idealCustomer.webp",
  },
  {
    id: "quick-turnaround",
    title: "Quick Turnaround Time",
    icon: "/images/home/approach/quickTurnaround.webp",
  },
];

const ApproachSection = () => {
  return (
    <section className="relative w-full bg-[#FEF9F4] text-black font-saans py-12 lg:py-20 overflow-hidden">
      <div className="w-full px-[35px] md:px-[80px] lg:pl-[245px] lg:pr-12">
        <div className="w-full flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-8 mb-8 lg:mb-14">
          <div className="w-full lg:w-[255px] shrink-0">
            <h2 className="font-medium text-[16px] leading-[21px] lg:text-[18px] lg:leading-[22px] text-black">
              Our Approach Simple, creative, and customer obsesses
            </h2>
          </div>

          <div className="w-full lg:max-w-[617px] flex flex-col items-start lg:items-start gap-5">
            <p className="font-normal text-[14px] leading-[17px] md:text-[16px] md:leading-[19px] lg:text-[18px] lg:leading-[22px] text-black w-full">
              Custom Food Packaging is a creative packaging company built on one simple idea food deserves more than just a box — it deserves an experience. We design and deliver packaging that’s functional, sustainable, and eye-catching, helping brands stand out while keeping freshness sealed inside
            </p>

            <Link
              href="/get-custom-quote"
              className="group hidden lg:inline-flex items-center justify-center gap-2 border border-[#707070] text-black hover:border-[#ED1E29] hover:text-[#ED1E29] transition-all duration-300 w-[221px] h-[34px] rounded-[25px] text-[14px] font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-black group-hover:hidden" />
              <span>Request custom quote</span>
              <ArrowUpRight size={14} className="hidden group-hover:block text-[#ED1E29]" />
            </Link>

            <Link
              href="/get-custom-quote"
              className="group lg:hidden inline-flex items-center justify-center gap-2 border border-[#ED1E29] text-[#ED1E29] hover:bg-[#ED1E29] hover:text-white transition-all duration-300 w-[201px] h-[34px] rounded-[25px] text-[13px] font-medium"
            >
              <span>Request custom quote</span>
              <ArrowUpRight size={14} className="text-[#ED1E29] group-hover:text-white transition-colors duration-300" />
            </Link>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 lg:gap-4">
          {features.map((item) => (
            <div
              key={item.id}
              className="w-full bg-[#F6E7D8] backdrop-blur-[30px] rounded-[20px] lg:rounded-[30px] p-3 lg:p-4 min-h-[60px] lg:min-h-[89px] flex items-center gap-3 transition-transform hover:scale-[1.02]"
            >
              <div className="w-[23px] lg:w-[29px] h-[28px] lg:h-[34px] shrink-0 relative flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={29}
                  height={34}
                  className="w-full h-full object-contain"
                />
              </div>

              <span className="text-[13px] leading-[16px] lg:text-[15px] xl:text-[16px] lg:leading-[20px] font-normal text-black break-words">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;