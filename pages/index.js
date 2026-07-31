import Header from "@/components/common/header";
import BannerCom from "@/components/homeComponents/bannerCom";
import ApproachSection from "@/components/common/ApproachSection";
import Prdoductcategory from "@/components/common/productCategory";
import MustHavesSection from "@/components/common/MustHavesSection";
import OurProcess from "@/components/common/ourProcess";
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
    </main>
  );
}