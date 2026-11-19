import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import BSection from "./components/BSection";
import Pricing from "./components/Pricing";
import Story from "./components/Story";

// Brand Color Palette extracted from Genius Ideas Logo:
// Primary Black: #000000
// Deep Brand Teal: #0D8A8A
// Dark Monoline Ink: #071919
// Stark White: #FFFFFF
// Light Neutral Surface: #F4F6F6

export default function GeniusIdeasLandingPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased selection:bg-[#0D8A8A] selection:text-white">
      {/* 1. TOP ANNOUNCEMENT BAR (Adidas Style) */}
      <div className="bg-black text-white text-[11px] font-bold tracking-[0.15em] uppercase py-2.5 px-4 text-center border-b border-white/15">
        PREMIUM MERCHANDISE AGENCY &bull; RETAIL ORIGINALS &amp; B2B BULK
        PRODUCTION
      </div>

      {/* 2. STICKY MAIN HEADER */}
      <Header />

      {/* 3. FULL-BLEED ADIDAS-STYLE HERO SECTION */}
      <Hero />

      {/* 4. CATEGORY FILTER PILLS & PRODUCT GRID (Adidas Carousel/Grid Style) */}
      <ProductGrid />

      {/* 5. RETAIL PRICING ARCHITECTURE (3-Tier Breakdown) */}
      <Pricing />

      {/* 6. B2B & DEPARTMENTAL BULK MERCH AGENCY BANNER */}
      <BSection />

      {/* 7. BRAND STORY / MANIFESTO SECTION (Adidas Editorial Strip) */}
      <Story />

      {/* 8. ADIDAS-STYLE DARK FOOTER */}
      <Footer />
    </div>
  );
}
