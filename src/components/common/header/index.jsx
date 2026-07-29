import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Search, User, ShoppingCart, Menu } from "lucide-react";
import Logo from "./logo";
import HeaderSearch from "./headerSearch";
import MenuBar from "./menuBar";
import MobileMenuBar from "./mobileMenuBar";

const Header = () => {
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const desktopMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (desktopMenuRef.current && !desktopMenuRef.current.contains(e.target)) {
        setDesktopMenuOpen(false);
      }
    };

    if (desktopMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [desktopMenuOpen]);

  return (
    <>
      {/* ---------- DESKTOP (lg+) : transparent floating header ---------- */}
      <header className="hidden lg:block absolute top-0 left-0 w-full z-30">
        <div className="flex items-center justify-between px-6 pt-4">
          <div ref={desktopMenuRef} className="relative">
            <div
              onClick={() => setDesktopMenuOpen((prev) => !prev)}
              className="cursor-pointer relative z-50 pl-6"
            >
              <Logo />
            </div>

            <MenuBar open={desktopMenuOpen} />
          </div>

          <HeaderSearch className="mx-6" />

          <Link
            href="/get-custom-quote"
            className="bg-white/25 backdrop-blur-md border border-white/30 hover:bg-white/35 transition text-white text-sm font-medium px-6 py-3 rounded-full whitespace-nowrap"
          >
            Request custom quote
          </Link>
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