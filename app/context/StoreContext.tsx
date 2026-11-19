"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Category } from "../lib/utilities";

interface StoreContextType {
  activeCategory: Category;
  setActiveCategory: (category: Category) => void;
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");
  const [cartCount, setCartCount] = useState(0);

  return (
    <StoreContext.Provider
      value={{ activeCategory, setActiveCategory, cartCount, setCartCount }}
    >
      {children}
    </StoreContext.Provider>
  );
}

// Custom hook to consume the state easily in any component
export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}
