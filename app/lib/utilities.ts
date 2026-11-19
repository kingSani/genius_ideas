export type Category =
  | "ALL"
  | "T-SHIRTS"
  | "HOODIES"
  | "CAPS"
  | "CASES"
  | "WALL ART";

export const CATEGORIES: Category[] = [
  "ALL",
  "T-SHIRTS",
  "HOODIES",
  "CAPS",
  "CASES",
  "WALL ART",
];

export interface Product {
  id: string;
  name: string;
  tier: "BASIC" | "STANDARD" | "PREMIUM" | "EDITION";
  price: string;
  category: Exclude<Category, "ALL">;
  tag?: string;
  image: string;
}

export const PRODUCTS: Product[] = [
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
