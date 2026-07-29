// src/components/common/header/index.jsx
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
      {/* ---------- DESKTOP (lg+) ---------- */}
      {/* 1. FIXED FLOATING SIDEBAR CONTAINER */}
      <div className="hidden lg:block fixed top-4 left-6 z-50">
        <div className="relative z-50 pl-4 pt-1">
          <Logo />
        </div>
        <MenuBar />
      </div>

      {/* 2. TOP HEADER BAR */}
      <header className="hidden lg:block absolute top-0 left-0 w-full z-30 pointer-events-none">
        <div className="flex items-center justify-between px-6 pt-4 pl-[210px]">
          {/* Perfectly Balanced Search Bar */}
          <div className="pointer-events-auto flex-1 flex justify-center mx-auto max-w-xl">
            <HeaderSearch className="w-full" />
          </div>

          {/* Right Action Button */}
          <div className="pointer-events-auto shrink-0 pl-4">
            <Link
              href="/get-custom-quote"
              className="bg-white/25 backdrop-blur-md border border-white/30 hover:bg-white/35 transition text-white text-sm font-medium px-6 py-3 rounded-full whitespace-nowrap"
            >
              Request custom quote
            </Link>
          </div>
        </div>
      </header>

      {/* ---------- TABLET / MOBILE (<lg) : solid red bar ---------- */}
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