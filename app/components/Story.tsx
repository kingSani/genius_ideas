export default function Story() {
  return (
    <section className="bg-[#0D8A8A] text-white py-16 px-4 md:px-12">
      <div className="max-w-4xl mx-auto text-center space-y-5">
        <h2 className="text-2xl font-custom md:text-4xl font-black uppercase tracking-tight">
          DESIGNED WITH INTENT. BUILT TO LAST.
        </h2>
        <p className="text-sm md:text-base text-white/90 leading-relaxed max-w-2xl mx-auto">
          Genius Ideas merges bold graphic architecture with disciplined
          production quality—delivering everyday streetwear and custom
          institutional apparel that stands apart from generic prints.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-white/25 divide-y sm:divide-y-0 sm:divide-x divide-white/20 mt-6 text-left">
          <div className="py-4 sm:py-5 sm:pr-6">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              425+ Curated Designs
            </h4>
            <p className="text-xs text-white/80 mt-1.5 leading-relaxed">
              From monoline vectors to bold typographic drops across 6 apparel
              and lifestyle formats.
            </p>
          </div>

          <div className="py-4 sm:py-5 sm:px-6">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Quality-Verified Blanks
            </h4>
            <p className="text-xs text-white/80 mt-1.5 leading-relaxed">
              Strict fabric weight inspection and print calibration before any
              order leaves production.
            </p>
          </div>

          <div className="py-4 sm:py-5 sm:pl-6">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              End-to-End Execution
            </h4>
            <p className="text-xs text-white/80 mt-1.5 leading-relaxed">
              In-house creative direction, supply chain management, and direct
              batch handover.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
