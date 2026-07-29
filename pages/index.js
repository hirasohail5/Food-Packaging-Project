import Header from "@/components/common/header";
import BannerCom from "@/components/homeComponents/bannerCom";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <BannerCom />
      {/* baaki sections (Our Approach etc.) baad mein yahan add hongi */}
    </main>
  );
}
