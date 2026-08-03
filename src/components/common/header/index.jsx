import { useState } from "react";
import Link from "next/link";
import { Search, User, ShoppingCart, Menu } from "lucide-react";
import Logo from "./logo";
import HeaderSearch from "./headerSearch";
import MenuBar from "./menuBar";
import MobileMenuBar from "./mobileMenuBar";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      
      <div className="hidden lg:block fixed top-4 left-6 z-50">
        <div className="relative z-50 pl-4 pt-1">
          <Logo />
        </div>
        <MenuBar />
      </div>

      <header className="hidden lg:block fixed top-0 left-0 w-full z-40 pointer-events-none">
        <div className="flex items-center justify-between px-6 pt-4 w-full">
          
          
          <div className="w-[230px] shrink-0 hidden lg:block" />

          
          <div className="pointer-events-auto flex-1 flex justify-center mx-auto max-w-xl min-w-0 px-4">
            <HeaderSearch className="w-full min-w-0" />
          </div>

          <div className="pointer-events-auto shrink-0">
            <Link
              href="/get-custom-quote"
              className="bg-white/40 backdrop-blur-md border border-white/40 hover:bg-white/55 transition text-black text-sm font-medium px-6 py-3 rounded-full whitespace-nowrap inline-block"
            >
              Request custom quote
            </Link>
          </div>

        </div>
      </header>

      <header className="lg:hidden absolute top-0 left-0 w-full z-30 bg-brand-red">
        <div className="flex items-center justify-between px-4 py-3.5">
          <Logo />
          <div className="flex items-center gap-4 text-white">
            <button aria-label="Search">
              <Search size={20} />
            </button>
            <Link href="/account" aria-label="Account">
              <User size={20} />
            </Link>
            <Link href="/cart" aria-label="Cart">
              <ShoppingCart size={20} />
            </Link>
            <button onClick={() => setMobileMenuOpen(true)} aria-label="Open menu">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenuBar open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};

export default Header;