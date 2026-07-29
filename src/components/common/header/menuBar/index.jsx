// src/components/common/header/menuBar/index.jsx
import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  ChevronDown,
  ChevronUp,
  User,
  ShoppingCart,
} from "lucide-react";
import { industriesMenu } from "@/data/headerMenu";

const MenuBar = ({ open }) => {
  const [industriesOpen, setIndustriesOpen] = useState(false);

  if (!open) return null;

  return (
    <div className="absolute top-0 left-0 bg-brand-red text-white w-[240px] rounded-3xl shadow-xl z-40 px-6 pt-5 pb-6">
      {/* spacer — outer button wala logo yahan se dikhega, panel apna alag logo render nahi karta */}
      <div className="h-10 mb-3" />
      <div className="border-t border-white/40 mb-4" />

      <ul className="flex flex-col gap-3 text-[15px]">
        <li>
          <Link
            href="/collection"
            className="flex items-center justify-between hover:opacity-80 transition"
          >
            <span>Products</span>
            <ChevronRight size={16} />
          </Link>
        </li>

        <li>
          <button
  onClick={() => setIndustriesOpen((prev) => !prev)}
  className="w-full flex items-center justify-between hover:opacity-80 transition"
>
  <span>Industries</span>
  {industriesOpen ? <ChevronRight size={16} /> : <ChevronDown size={16} />}
</button>

          {industriesOpen && industriesMenu.length > 0 && (
            <ul className="flex flex-col gap-2 mt-2 pl-3 text-sm">
              {industriesMenu.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:opacity-80">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Industries open ho to about/Contact hide ho jate hain */}
        {!industriesOpen && (
          <>
            <li>
              <Link href="/about-us" className="hover:opacity-80 transition">
                about
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:opacity-80 transition">
                Contact
              </Link>
            </li>
          </>
        )}

        <li>
          <Link href="/account" className="flex items-center justify-between hover:opacity-80">
            <span>Account</span>
            <User size={16} />
          </Link>
        </li>
        <li>
          <Link href="/cart" className="flex items-center justify-between hover:opacity-80">
            <span>Cart</span>
            <ShoppingCart size={16} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuBar;