"use client";

import { useState } from "react";
import { useStore } from "../context/StoreContext";
import GeniusIdeasLogo from "./GeniusIdeasLogo";
import { Search, ShoppingBag, Menu, X } from "lucide-react";

import { CATEGORIES } from "../lib/utilities";

export default function Header() {
  const { setActiveCategory, cartCount, setCartCount } = useStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      {/* Utility Sub-bar */}
      <div className="hidden md:flex justify-end items-center gap-6 px-8 py-1.5 text-[11px] text-neutral-600 tracking-wider uppercase border-b border-neutral-100">
        <a href="#agency" className="hover:underline">
          B2B &amp; Departmental Orders
        </a>
        <a href="#pricing" className="hover:underline">
          Pricing Tiers
        </a>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-360 mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Left: Mobile Menu + Brand Mark */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1 text-black"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <a href="#" className="flex items-center gap-2.5 group">
            <GeniusIdeasLogo className="w-18 h-19 transition-transform duration-200 group-hover:scale-105" />
          </a>
        </div>

        {/* Center: Main Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-custom tracking-[0.08em] uppercase">
          <a
            href="#catalog"
            onClick={() => setActiveCategory("T-SHIRTS")}
            className="py-5 border-b-2 border-transparent hover:border-black transition-colors"
          >
            T-Shirts
          </a>
          <a
            href="#catalog"
            onClick={() => setActiveCategory("HOODIES")}
            className="py-5 border-b-2 border-transparent hover:border-black transition-colors"
          >
            Hoodies &amp; Sweatshirts
          </a>
          <a
            href="#catalog"
            onClick={() => setActiveCategory("CAPS")}
            className="py-5 border-b-2 border-transparent hover:border-black transition-colors"
          >
            Caps
          </a>
          <a
            href="#catalog"
            onClick={() => setActiveCategory("WALL ART")}
            className="py-5 border-b-2 border-transparent hover:border-black transition-colors"
          >
            Wall Art &amp; Cases
          </a>
          <a
            href="#agency"
            className="py-5 border-b-2 border-transparent hover:border-[#0D8A8A] text-[#0D8A8A] transition-colors"
          >
            Custom Bulk Merch
          </a>
        </nav>

        {/* Right: Search Input + Bag */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center bg-[#F4F6F6] px-3 py-1.5 border border-transparent focus-within:border-black transition-colors">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-xs outline-none w-32 md:w-44 placeholder:text-neutral-500"
            />
            <Search size={16} className="text-black" />
          </div>

          <button
            onClick={() => setCartCount((c) => c + 1)}
            className="relative p-2 hover:bg-neutral-100 transition-colors"
            aria-label="Shopping Bag"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute top-0.5 right-0.5 bg-[#0D8A8A] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-200 px-6 py-6 space-y-4">
          {CATEGORIES.map((cat) => (
            <a
              key={cat}
              href="#catalog"
              onClick={() => {
                setActiveCategory(cat);
                setMobileMenuOpen(false);
              }}
              className="block text-sm font-custom tracking-wider uppercase py-1 border-b border-neutral-100"
            >
              {cat}
            </a>
          ))}
          <a
            href="#agency"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-custom tracking-wider uppercase text-[#0D8A8A] pt-2"
          >
            B2B BULK MERCH PIPELINE &rarr;
          </a>
        </div>
      )}
    </header>
  );
}
