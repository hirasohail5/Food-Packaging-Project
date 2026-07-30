import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ChevronDown, User, ShoppingCart } from "lucide-react";
import { productsMenu, industriesMenu } from "@/data/headerMenu";

const MenuBar = () => {
  const [productsOpen, setProductsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  const toggleProducts = () => {
    setProductsOpen((prev) => !prev);
    setIndustriesOpen(false);
  };

  const toggleIndustries = () => {
    setIndustriesOpen((prev) => !prev);
    setProductsOpen(false);
  };

  return (
    <div className="absolute top-0 left-0 bg-brand-red text-white w-[190px] h-[270px] rounded-2xl shadow-xl z-40 px-4 pt-4 pb-4 flex flex-col overflow-hidden">
      <div className="h-10 mb-3 shrink-0" />

      <div className="-mx-4 border-t border-white/40 mb-2.5 shrink-0" />

      <ul
        className="flex flex-col gap-2 text-[14px] font-medium flex-1 overflow-y-auto"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style jsx>{`
          ul::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <li>
          <button
            onClick={toggleProducts}
            className="w-full flex items-center justify-between hover:opacity-80 transition text-left"
          >
            <span>Products</span>
            {productsOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>

          {productsOpen && productsMenu?.length > 0 && (
            <ul className="flex flex-col gap-1.5 mt-2 text-[13px]">
              {productsMenu.map((item, idx) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`hover:opacity-80 transition block py-0.5 ${
                      idx < 2 ? "font-semibold" : "font-normal text-white/90"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        {!productsOpen && (
          <li>
            <button
              onClick={toggleIndustries}
              className="w-full flex items-center justify-between hover:opacity-80 transition text-left"
            >
              <span>Industries</span>
              {industriesOpen ? <ChevronRight size={16} /> : <ChevronDown size={16} />}
            </button>

            {industriesOpen && industriesMenu?.length > 0 && (
              <ul className="flex flex-col gap-1.5 mt-1.5 pl-3 text-[13px] text-white/90">
                {industriesMenu.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="hover:opacity-80 transition block py-0.5">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        )}

        {!productsOpen && !industriesOpen && (
          <>
            <li>
              <Link href="/about-us" className="hover:opacity-80 transition block py-0.5">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:opacity-80 transition block py-0.5">
                Contact
              </Link>
            </li>
          </>
        )}

        {!productsOpen && (
          <>
            <li>
              <Link href="/account" className="flex items-center justify-between hover:opacity-80 transition pt-0.5">
                <span>Account</span>
                <User size={16} />
              </Link>
            </li>
            <li>
              <Link href="/cart" className="flex items-center justify-between hover:opacity-80 transition">
                <span>Cart</span>
                <ShoppingCart size={16} />
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default MenuBar;