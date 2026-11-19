import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[78vh] min-h-135 max-h-205 bg-black overflow-hidden">
      {/* Background Visual */}
      <Image
        src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1800&q=85"
        alt="Genius Ideas Streetwear Collection"
        fill
        priority
        sizes="100vw"
        className="object-cover object-top opacity-70"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

      {/* Hero Copy Overlay (Bottom-Left Architectural Placement) */}
      <div className="absolute inset-0 max-w-360 mx-auto px-4 md:px-12 pb-14 md:pb-20 flex flex-col justify-end items-start">
        <h1 className="text-4xl sm:text-6xl font-custom md:text-7xl font-black text-white uppercase tracking-tight leading-[0.95] max-w-5xl">
          WEAR THE IDEA
        </h1>
        <h2 className="text-2xl sm:text-6xl md:pt-10 md:text-5xl font-custom font-black text-white uppercase tracking-tight leading-[0.95] max-w-3xl">
          {" "}
          OWN THE STANDARD
        </h2>

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
  );
}
