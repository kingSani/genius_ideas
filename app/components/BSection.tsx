import { ArrowRight } from "lucide-react";

export default function BSection() {
  return (
    <section id="agency" className="bg-black text-white py-20 px-4 md:px-12">
      <div className="max-w-360 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-4xl  md:text-5xl font-black uppercase tracking-tight leading-[1.02]">
            OUTFIT YOUR DEPARTMENT, CONVENTION, OR BRAND.
          </h2>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
            We operate a zero-bottleneck production pipeline from concept
            mockups to physical batch handover. Complimentary custom design
            included on bulk orders—with logistics baked straight into your
            package.
          </p>

          {/* 4-Phase Workflow */}
          <div className="pt-4 divide-y divide-white/15 border-y border-white/15">
            {[
              {
                num: "01",
                title: "LOCK BRIEF",
                desc: "Define quantities, sizes, and lock your pre-production slot.",
              },
              {
                num: "02",
                title: "VISUAL MOCKUPS",
                desc: "Receive tailored apparel mockups ready for your team campaign.",
              },
              {
                num: "03",
                title: "BATCH PRODUCTION",
                desc: "Precision blank sourcing and quality-controlled print runs.",
              },
              {
                num: "04",
                title: "DIRECT HANDOVER",
                desc: "Sorted, packaged, and delivered on deadline.",
              },
            ].map((phase) => (
              <div
                key={phase.num}
                className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-1.5 sm:gap-4 items-baseline"
              >
                <div className="sm:col-span-5 flex items-baseline gap-3">
                  <span className="font-mono text-xs text-[#0D8A8A] shrink-0">
                    {phase.num}
                  </span>
                  <span className="text-xs font-black tracking-widest text-white">
                    {phase.title}
                  </span>
                </div>
                {/* pl-7 aligns the description under the title on mobile, then resets on desktop */}
                <p className="pl-7 sm:pl-0 sm:col-span-7 text-xs text-neutral-300 leading-relaxed">
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
