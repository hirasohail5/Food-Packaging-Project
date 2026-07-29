import { useState } from "react";
import Link from "next/link";
import {
  X,
  Search,
  ChevronDown,
  ChevronUp,
  User,
  ShoppingCart,
  ArrowUpRight,
} from "lucide-react";
import Logo from "../logo";
import { productsMenu, industriesMenu } from "@/data/headerMenu";

const MobileMenuBar = ({ open, onClose }) => {
  const [productsOpen, setProductsOpen] = useState(true);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-brand-red text-white flex flex-col lg:hidden">
      {/* top bar */}
      <div className="flex items-center justify-between px-4 py-4">
        <Logo />
        <div className="flex items-center gap-4">
          <ShoppingCart size={20} />
          <button onClick={onClose} aria-label="Close menu">
            <X size={22} />
          </button>
        </div>
      </div>

      {/* search */}
      <div className="px-4">
        <div className="flex items-center gap-2 bg-white/15 rounded-full px-4 py-2.5">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search for tissue, bags, orders and more.."
            className="bg-transparent outline-none text-sm w-full placeholder:text-white/80 text-white"
          />
        </div>
      </div>

      {/* scrollable menu */}
      <div className="flex-1 overflow-y-auto px-4 mt-6">
        {/* Products accordion */}
        <button
          onClick={() => setProductsOpen((p) => !p)}
          className="w-full flex items-center justify-between text-lg font-medium py-2"
        >
          Products
          {productsOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        {productsOpen && (
          <ul className="flex flex-col gap-2 pl-1 pb-4 text-[15px]">
            {productsMenu.map((item, idx) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={idx < 2 ? "font-semibold" : "font-normal opacity-90"}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div className="border-t border-white/20 my-2" />

        {/* Industries accordion */}
        <button
          onClick={() => setIndustriesOpen((p) => !p)}
          className="w-full flex items-center justify-between text-lg font-medium py-2"
        >
          Industries
          {industriesOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        {industriesOpen && (
          <ul className="flex flex-col gap-2 pl-1 pb-4 text-[15px]">
            {industriesMenu.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* bottom fixed links */}
      <div className="border-t border-white/20 px-4 py-4 flex items-center justify-between text-sm tracking-wide">
        <Link href="/account" className="flex items-center gap-2 font-semibold">
          <User size={16} />
          ACCOUNT
        </Link>
        <Link href="/get-custom-quote" className="flex items-center gap-2 font-semibold">
          REQUEST CUSTOM QUOTE
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default MobileMenuBar;
