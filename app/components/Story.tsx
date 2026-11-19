export default function Story() {
  return (
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
            <h4 className="text-xs font-black uppercase tracking-widest">
              425+ Curated Designs
            </h4>
            <p className="text-xs text-white/80 mt-1">
              From monoline vectors to bold typographic drops across 6 apparel
              and lifestyle formats.
            </p>
          </div>
          <div className="bg-black/20 p-5 border border-white/20">
            <h4 className="text-xs font-black uppercase tracking-widest">
              Quality-Verified Blanks
            </h4>
            <p className="text-xs text-white/80 mt-1">
              Strict fabric weight inspection and print calibration before any
              order leaves production.
            </p>
          </div>
          <div className="bg-black/20 p-5 border border-white/20">
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
  );
}
