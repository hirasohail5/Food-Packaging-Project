import Header from "@/components/common/header";
import BannerCom from "@/components/homeComponents/bannerCom";
import ApproachSection from "@/components/common/ApproachSection";
import Prdoductcategory from "@/components/common/productCategory";
import MustHavesSection from "@/components/common/MustHavesSection";
import OurProcess from "@/components/common/ourProcess";
import TrustedSection from "@/components/common/trustedSection";
import TestimonialsSection from "@/components/common/testimonialsSection";
import FAQSection from "@/components/common/FAQSection";

import TestSection from "@/components/homeComponents/testsection";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <BannerCom />
      <ApproachSection />
      <Prdoductcategory />
      <MustHavesSection />
      <OurProcess />
      <TestimonialsSection />
      
      {/* <TrustedSection />
      
      <FAQSection />
      <TestSection /> */}
    </main>
  );
}