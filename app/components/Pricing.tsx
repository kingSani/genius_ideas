import { ArrowRight } from "lucide-react";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-[#F4F6F6] py-16 px-4 md:px-12 border-y border-neutral-200"
    >
      <div className="max-w-360 mx-auto">
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
              <p className="text-3xl font-black text-[#0D8A8A] mt-4">₦10,000</p>
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
                multi-color screen or DTF artwork and reinforced collar ribbing.
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
              <p className="text-3xl font-black text-[#0D8A8A] mt-4">₦30,000</p>
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
  );
}
