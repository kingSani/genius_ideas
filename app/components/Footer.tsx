"use client";

import { useSyncExternalStore } from "react";
import GeniusIdeasLogo from "./GeniusIdeasLogo";

// The year never changes during a session, so there is nothing to subscribe to.
const subscribe = () => () => {};
const getClientYear = () => new Date().getFullYear();
const getServerYear = () => 2026;

export default function Footer() {
  const year = useSyncExternalStore(subscribe, getClientYear, getServerYear);

  return (
    <footer className="bg-black text-white pt-14 pb-10 px-4 md:px-12 border-t border-white/15">
      <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-white/15">
        <div>
          <h5 className="text-xs font-black uppercase tracking-[0.15em] mb-4">
            PRODUCTS
          </h5>
          <ul className="space-y-2.5 text-xs text-neutral-400">
            <li>
              <a href="#catalog" className="hover:text-white">
                T-Shirts
              </a>
            </li>
            <li>
              <a href="#catalog" className="hover:text-white">
                Hoodies &amp; Sweatshirts
              </a>
            </li>
            <li>
              <a href="#catalog" className="hover:text-white">
                Caps
              </a>
            </li>
            <li>
              <a href="#catalog" className="hover:text-white">
                Phone Cases
              </a>
            </li>
            <li>
              <a href="#catalog" className="hover:text-white">
                Framed Wall Art
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-xs font-black uppercase tracking-[0.15em] mb-4">
            AGENCY SERVICES
          </h5>
          <ul className="space-y-2.5 text-xs text-neutral-400">
            <li>
              <a href="#agency" className="hover:text-white">
                Departmental &amp; Campus Merch
              </a>
            </li>
            <li>
              <a href="#agency" className="hover:text-white">
                Corporate &amp; Event Apparel
              </a>
            </li>
            <li>
              <a href="#engine" className="hover:text-white">
                30-Day Content &amp; Sales Engine
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-xs font-black uppercase tracking-[0.15em] mb-4">
            PRICING TIERS
          </h5>
          <ul className="space-y-2.5 text-xs text-neutral-400">
            <li>Basic Tee — ₦10,000</li>
            <li>Standard Tee — ₦20,000</li>
            <li>Premium Tee — ₦30,000</li>
            <li>Bulk Custom Quotes</li>
          </ul>
        </div>

        <div>
          <h5 className="text-xs font-black uppercase tracking-[0.15em] mb-4">
            GENIUS IDEAS
          </h5>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Premium Merchandise Agency &amp; Creative Studio.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <GeniusIdeasLogo className="w-7 h-8" />
            <span className="font-black text-sm tracking-tight uppercase">
              GENIUS<span className="text-[#0D8A8A]">IDEAS</span>
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-neutral-500">
        <p>&copy; {year} Genius Ideas. All rights reserved.</p>
        <div className="flex gap-6 uppercase tracking-wider">
          <a href="#pricing" className="hover:text-white">
            Terms
          </a>
          <a href="#agency" className="hover:text-white">
            Bulk Policy
          </a>
          <a href="mailto:kingsani04@gmail.com" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
