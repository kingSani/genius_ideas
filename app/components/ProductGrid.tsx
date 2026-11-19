"use client";
import Image from "next/image";
import { CATEGORIES, PRODUCTS } from "../lib/utilities";
import { useStore } from "../context/StoreContext";

export default function ProductGrid() {
  const { setActiveCategory, setCartCount, activeCategory } = useStore();
  const filteredProducts =
    activeCategory === "ALL"
      ? PRODUCTS
      : PRODUCTS.filter((item) => item.category === activeCategory);
  return (
    <section id="catalog" className="max-w-360 mx-auto px-4 md:px-12 py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <h2 className="text-3xl font-custom md:text-4xl font-black uppercase tracking-tight">
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
            <div className="relative aspect-4/5 bg-[#F4F6F6] overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
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
  );
}
