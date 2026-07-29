import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 shrink-0">
      <Image
        src="/images/common/header/logo.webp"
        alt="Custom Food Packaging"
        width={140}
        height={40}
        priority
        className="w-[110px] h-auto md:w-[130px] lg:w-[140px]"
      />
    </Link>
  );
};

export default Logo;
