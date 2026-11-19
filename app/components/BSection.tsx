import { ArrowRight } from "lucide-react";

export default function BSection() {
  return (
    <section id="agency" className="bg-black text-white py-20 px-4 md:px-12">
      <div className="max-w-360 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
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
                className="border border-white/20 p-4 bg-white/3"
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
      </div>
    </section>
  );
}
