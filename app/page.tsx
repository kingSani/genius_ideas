"use client";

import React, { useState } from "react";
import {
  Search,
  ShoppingBag,
  ArrowRight,
  Menu,
  X,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Footer from "./components/Footer";

// Brand Color Palette extracted from Genius Ideas Logo:
// Primary Black: #000000
// Deep Brand Teal: #0D8A8A
// Dark Monoline Ink: #071919
// Stark White: #FFFFFF
// Light Neutral Surface: #F4F6F6

type Category = "ALL" | "T-SHIRTS" | "HOODIES" | "CAPS" | "CASES" | "WALL ART";

interface Product {
  id: string;
  name: string;
  tier: "BASIC" | "STANDARD" | "PREMIUM" | "EDITION";
  price: string;
  category: Exclude<Category, "ALL">;
  tag?: string;
  image: string;
}

const PRODUCTS: Product[] = [
  {
    id: "tee-01",
    name: "GI Monoline Brain Heavyweight Tee",
    tier: "PREMIUM",
    price: "₦30,000",
    category: "T-SHIRTS",
    tag: "BESTSELLER",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "tee-02",
    name: "Teal Box Classic Street Tee",
    tier: "STANDARD",
    price: "₦20,000",
    category: "T-SHIRTS",
    tag: "NEW",
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "tee-03",
    name: "Core Essential Everyday Tee",
    tier: "BASIC",
    price: "₦10,000",
    category: "T-SHIRTS",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "hoodie-01",
    name: "Genius Originals 450GSM Pullover Hoodie",
    tier: "PREMIUM",
    price: "₦35,000",
    category: "HOODIES",
    tag: "LIMITED",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cap-01",
    name: "GI Embroidered Structural Dad Cap",
    tier: "STANDARD",
    price: "₦12,000",
    category: "CAPS",
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "case-01",
    name: "Matte Impact-Resistant Graphic Case",
    tier: "STANDARD",
    price: "₦10,000",
    category: "CASES",
    image:
      "https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "art-01",
    name: "Monoline Architecture Framed Wall Print",
    tier: "EDITION",
    price: "₦25,000",
    category: "WALL ART",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sweat-01",
    name: "Studio Drop-Shoulder Crewneck Sweatshirt",
    tier: "PREMIUM",
    price: "₦30,000",
    category: "HOODIES",
    image:
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=800&q=80",
  },
];

const CATEGORIES: Category[] = [
  "ALL",
  "T-SHIRTS",
  "HOODIES",
  "CAPS",
  "CASES",
  "WALL ART",
];

// Custom SVG Logo matching your uploaded brand mark
function GeniusIdeasLogo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Genius Ideas Logo"
    >
      {/* Teal Vertical Block */}
      <rect x="26" y="18" width="68" height="94" fill="#0D8A8A" />
      {/* Dark Monoline Brain + GI Monogram */}
      <path
        d="M30 78C14 78 10 56 24 46C20 32 38 22 50 32C60 20 82 22 86 36C102 36 108 56 96 68C104 82 88 94 74 86C66 96 54 96 54 112L52 128"
        stroke="#071919"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M58 50C44 46 34 58 38 72C42 84 58 84 62 70L64 46M56 64H74C82 64 86 72 80 78C74 84 64 80 64 72"
        stroke="#071919"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function GeniusIdeasLandingPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const filteredProducts =
    activeCategory === "ALL"
      ? PRODUCTS
      : PRODUCTS.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased selection:bg-[#0D8A8A] selection:text-white">
      {/* 1. TOP ANNOUNCEMENT BAR (Adidas Style) */}
      <div className="bg-black text-white text-[11px] font-bold tracking-[0.15em] uppercase py-2.5 px-4 text-center border-b border-white/15">
        PREMIUM MERCHANDISE AGENCY &bull; RETAIL ORIGINALS &amp; B2B BULK
        PRODUCTION
      </div>

      {/* 2. STICKY MAIN HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
        {/* Utility Sub-bar */}
        <div className="hidden md:flex justify-end items-center gap-6 px-8 py-1.5 text-[11px] text-neutral-600 tracking-wider uppercase border-b border-neutral-100">
          <a href="#agency" className="hover:underline">
            B2B &amp; Departmental Orders
          </a>
          <a href="#pricing" className="hover:underline">
            Pricing Tiers
          </a>
          <a href="#engine" className="hover:underline">
            30-Day Content Engine
          </a>
        </div>

        {/* Main Nav Bar */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
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

          {/* Center: Bold Uppercase Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-extrabold tracking-[0.12em] uppercase">
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
                className="block text-sm font-black tracking-wider uppercase py-1 border-b border-neutral-100"
              >
                {cat}
              </a>
            ))}
            <a
              href="#agency"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-black tracking-wider uppercase text-[#0D8A8A] pt-2"
            >
              B2B BULK MERCH PIPELINE &rarr;
            </a>
          </div>
        )}
      </header>

      {/* 3. FULL-BLEED ADIDAS-STYLE HERO SECTION */}
      <section className="relative w-full h-[78vh] min-h-[540px] max-h-[820px] bg-black overflow-hidden">
        {/* Background Visual */}
        <Image
          src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1800&q=85"
          alt="Genius Ideas Streetwear Collection"
          className="w-full h-full object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* Hero Copy Overlay (Bottom-Left Architectural Placement) */}
        <div className="absolute inset-0 max-w-[1440px] mx-auto px-4 md:px-12 pb-14 md:pb-20 flex flex-col justify-end items-start">
          <span className="inline-block bg-[#0D8A8A] text-white text-xs font-black tracking-[0.2em] uppercase px-3 py-1 mb-4">
            GENIUS IDEAS ORIGINALS
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight leading-[0.95] max-w-3xl">
            WEAR THE IDEA. <br />
            OWN THE STANDARD.
          </h1>
          <p className="text-neutral-200 text-sm md:text-base max-w-xl mt-4 font-normal leading-relaxed">
            Precision-printed heavyweight tees, hoodies, caps, and custom
            merchandise engineered for creators, departments, and bold brands.
          </p>

          {/* Signature Adidas Offset Dual-Border Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href="#catalog"
              className="group relative inline-flex items-center gap-3 bg-white text-black px-6 py-3.5 text-xs font-black tracking-[0.15em] uppercase hover:bg-neutral-200 transition-colors"
            >
              <span>Shop Originals</span>
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
              <span className="absolute -bottom-1 -right-1 w-full h-full border border-white pointer-events-none" />
            </a>

            <a
              href="#agency"
              className="group relative inline-flex items-center gap-3 bg-[#0D8A8A] text-white px-6 py-3.5 text-xs font-black tracking-[0.15em] uppercase hover:bg-[#0b7575] transition-colors"
            >
              <span>Start Bulk Order</span>
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
              <span className="absolute -bottom-1 -right-1 w-full h-full border border-[#0D8A8A] pointer-events-none" />
            </a>
          </div>
        </div>
      </section>

      {/* 4. CATEGORY FILTER PILLS & PRODUCT GRID (Adidas Carousel/Grid Style) */}
      <section
        id="catalog"
        className="max-w-[1440px] mx-auto px-4 md:px-12 py-16"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#0D8A8A] mb-1">
              CURATED SHOWCASE
            </p>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
              THE MERCHANDISE LINEUP
            </h2>
          </div>

          {/* Sharp Rectangular Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => {
              const isSelected = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-xs font-extrabold tracking-[0.12em] uppercase border transition-colors ${
                    isSelected
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-neutral-300 hover:border-black"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group border border-transparent hover:border-black transition-colors bg-white flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] bg-[#F4F6F6] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {product.tag && (
                  <span className="absolute top-3 left-3 bg-white text-black text-[10px] font-black tracking-[0.15em] uppercase px-2.5 py-1">
                    {product.tag}
                  </span>
                )}
                {/* Price Tag Anchored Bottom-Left (Classic Adidas UI detail) */}
                <div className="absolute bottom-0 left-0 bg-white px-3 py-1.5 text-xs font-extrabold tracking-wide group-hover:-translate-y-1 transition-transform">
                  {product.price}
                </div>
              </div>

              {/* Product Details */}
              <div className="p-3.5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                    {product.category} &bull; {product.tier}
                  </p>
                  <h3 className="text-sm font-bold text-black mt-1 leading-snug">
                    {product.name}
                  </h3>
                </div>

                <button
                  onClick={() => setCartCount((c) => c + 1)}
                  className="mt-4 w-full py-2.5 border border-black text-xs font-black uppercase tracking-[0.12em] hover:bg-black hover:text-white transition-colors"
                >
                  Add to Bag
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. RETAIL PRICING ARCHITECTURE (3-Tier Breakdown) */}
      <section
        id="pricing"
        className="bg-[#F4F6F6] py-16 px-4 md:px-12 border-y border-neutral-200"
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-10">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#0D8A8A]">
              TRANSPARENT RETAIL TIERS
            </p>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mt-1">
              BUILT FOR EVERY GRADE OF WEAR
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tier 1 */}
            <div className="bg-white border border-neutral-300 p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black tracking-[0.15em] uppercase text-neutral-500">
                  TIER 01
                </span>
                <h3 className="text-2xl font-black uppercase mt-1">
                  BASIC EDITION
                </h3>
                <p className="text-3xl font-black text-[#0D8A8A] mt-4">
                  ₦10,000
                </p>
                <p className="text-xs text-neutral-600 mt-3 leading-relaxed">
                  Clean everyday cotton blanks with crisp minimalist chest or
                  typography prints. Ideal for daily wear and campus drops.
                </p>
              </div>
              <a
                href="#catalog"
                className="mt-8 inline-flex items-center justify-between border-t border-neutral-200 pt-4 text-xs font-black uppercase tracking-widest hover:text-[#0D8A8A]"
              >
                <span>Explore Basic</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Tier 2 */}
            <div className="bg-black text-white border-2 border-black p-8 flex flex-col justify-between relative">
              <span className="absolute top-0 right-0 bg-[#0D8A8A] text-white text-[10px] font-black tracking-[0.15em] uppercase px-3 py-1">
                MOST POPULAR
              </span>
              <div>
                <span className="text-xs font-black tracking-[0.15em] uppercase text-[#0D8A8A]">
                  TIER 02
                </span>
                <h3 className="text-2xl font-black uppercase mt-1">
                  STANDARD EDITION
                </h3>
                <p className="text-3xl font-black text-white mt-4">₦20,000</p>
                <p className="text-xs text-neutral-300 mt-3 leading-relaxed">
                  Mid-heavyweight structured cotton with high-definition
                  multi-color screen or DTF artwork and reinforced collar
                  ribbing.
                </p>
              </div>
              <a
                href="#catalog"
                className="mt-8 inline-flex items-center justify-between border-t border-white/20 pt-4 text-xs font-black uppercase tracking-widest text-[#0D8A8A] hover:text-white"
              >
                <span>Explore Standard</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Tier 3 */}
            <div className="bg-white border border-neutral-300 p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black tracking-[0.15em] uppercase text-neutral-500">
                  TIER 03
                </span>
                <h3 className="text-2xl font-black uppercase mt-1">
                  PREMIUM ORIGINALS
                </h3>
                <p className="text-3xl font-black text-[#0D8A8A] mt-4">
                  ₦30,000
                </p>
                <p className="text-xs text-neutral-600 mt-3 leading-relaxed">
                  Luxury oversized heavyweight fabric, custom woven labels, and
                  archival-grade print durability.
                </p>
              </div>
              <a
                href="#catalog"
                className="mt-8 inline-flex items-center justify-between border-t border-neutral-200 pt-4 text-xs font-black uppercase tracking-widest hover:text-[#0D8A8A]"
              >
                <span>Explore Premium</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. B2B & DEPARTMENTAL BULK MERCH AGENCY BANNER */}
      <section id="agency" className="bg-black text-white py-20 px-4 md:px-12">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block bg-[#0D8A8A] text-white text-xs font-black tracking-[0.2em] uppercase px-3 py-1">
              B2B &amp; INSTITUTIONAL MERCHANDISE
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-[1.02]">
              OUTFIT YOUR DEPARTMENT, CONVENTION, OR BRAND.
            </h2>
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
              We operate a zero-bottleneck production pipeline from concept
              mockups to physical batch handover. Complimentary custom design
              included on bulk orders—with logistics baked straight into your
              package.
            </p>

            {/* 4-Phase Workflow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                {
                  step: "01 / LOCK BRIEF",
                  desc: "Define quantities, sizes, and lock your pre-production slot.",
                },
                {
                  step: "02 / VISUAL MOCKUPS",
                  desc: "Receive tailored apparel mockups ready for your team campaign.",
                },
                {
                  step: "03 / BATCH PRODUCTION",
                  desc: "Precision blank sourcing and quality-controlled print runs.",
                },
                {
                  step: "04 / DIRECT HANDOVER",
                  desc: "Sorted, packaged, and delivered on deadline.",
                },
              ].map((phase) => (
                <div
                  key={phase.step}
                  className="border border-white/20 p-4 bg-white/[0.03]"
                >
                  <p className="text-xs font-black tracking-widest text-[#0D8A8A]">
                    {phase.step}
                  </p>
                  <p className="text-xs text-neutral-300 mt-1.5 leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="mailto:kingsani04@gmail.com?subject=Bulk%20Merchandise%20Inquiry%20-%20Genius%20Ideas"
                className="group relative inline-flex items-center gap-3 bg-white text-black px-7 py-4 text-xs font-black tracking-[0.15em] uppercase hover:bg-neutral-200 transition-colors"
              >
                <span>Request Bulk Quote</span>
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
                <span className="absolute -bottom-1 -right-1 w-full h-full border border-white pointer-events-none" />
              </a>
            </div>
          </div>

          {/* Right: 30-Day Content & Sales Engine Feature Card */}
          <div
            id="engine"
            className="lg:col-span-6 bg-[#071919] border border-[#0D8A8A]/40 p-8 md:p-10"
          >
            <div className="flex items-center gap-2 text-[#0D8A8A] text-xs font-black tracking-[0.2em] uppercase mb-3">
              <Sparkles size={16} />
              <span>DIGITAL GROWTH SYSTEM</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
              30-DAY CONTENT &amp; SALES ENGINE
            </h3>
            <p className="text-neutral-300 text-sm mt-3 leading-relaxed">
              A plug-and-play marketing system built by Genius Ideas for small
              businesses, creators, and founders who want consistent enquiries
              and repeatable sales.
            </p>

            <ul className="space-y-3 mt-6 text-xs font-bold tracking-wide uppercase text-neutral-200">
              <li className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-[#0D8A8A] shrink-0" />
                <span>30-Day Execution Content Calendar</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-[#0D8A8A] shrink-0" />
                <span>100 Scroll-Stopping Hook Starters</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-[#0D8A8A] shrink-0" />
                <span>
                  50 Promotional Caption Templates &amp; 15 WhatsApp Sales
                  Scripts
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-[#0D8A8A] shrink-0" />
                <span>4-Week Campaign Planner + Conversion Metrics</span>
              </li>
            </ul>

            <a
              href="mailto:kingsani04@gmail.com?subject=30-Day%20Content%20%26%20Sales%20Engine"
              className="mt-8 inline-flex items-center gap-3 bg-[#0D8A8A] text-white px-6 py-3.5 text-xs font-black tracking-[0.15em] uppercase hover:bg-[#0b7575] transition-colors"
            >
              <span>Get The Sales Engine</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 7. BRAND STORY / MANIFESTO SECTION (Adidas Editorial Strip) */}
      <section className="bg-[#0D8A8A] text-white py-16 px-4 md:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight">
            DESIGNED WITH INTENT. BUILT TO LAST.
          </h2>
          <p className="text-sm md:text-base text-white/90 leading-relaxed max-w-2xl mx-auto">
            Genius Ideas merges bold graphic architecture with disciplined
            production quality—delivering everyday streetwear and custom
            institutional apparel that stands apart from generic prints.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 text-left">
            <div className="bg-black/20 p-5 border border-white/20">
              <Layers size={20} className="mb-2" />
              <h4 className="text-xs font-black uppercase tracking-widest">
                425+ Curated Designs
              </h4>
              <p className="text-xs text-white/80 mt-1">
                From monoline vectors to bold typographic drops across 6 apparel
                and lifestyle formats.
              </p>
            </div>
            <div className="bg-black/20 p-5 border border-white/20">
              <ShieldCheck size={20} className="mb-2" />
              <h4 className="text-xs font-black uppercase tracking-widest">
                Quality-Verified Blanks
              </h4>
              <p className="text-xs text-white/80 mt-1">
                Strict fabric weight inspection and print calibration before any
                order leaves production.
              </p>
            </div>
            <div className="bg-black/20 p-5 border border-white/20">
              <Sparkles size={20} className="mb-2" />
              <h4 className="text-xs font-black uppercase tracking-widest">
                End-to-End Execution
              </h4>
              <p className="text-xs text-white/80 mt-1">
                In-house creative direction, supply chain management, and direct
                batch handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. ADIDAS-STYLE DARK FOOTER */}
      <Footer />
    </div>
  );
}
