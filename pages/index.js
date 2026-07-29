import Header from "@/components/common/header";
import BannerCom from "@/components/homeComponents/bannerCom";
import TestSection from "@/components/homeComponents/testsection";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <BannerCom />
      <TestSection />
      {/* Page scroll hone par menu naturally website ke saath scroll karega */}
    </main>
  );
}