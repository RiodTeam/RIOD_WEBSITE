"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "@/app/context/CartContext";

export default function CartIcon() {
  const { totalQuantity, setIsCartOpen } = useCart();

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="relative flex items-center gap-1.5 text-white hover:text-[#cdf80a] transition-colors"
      aria-label="Open cart"
    >
      <ShoppingCart className="w-5 h-5" />
      {totalQuantity > 0 && (
        <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#cdf80a] text-black text-[10px] font-bold flex items-center justify-center">
          {totalQuantity}
        </span>
      )}
    </button>
  );
}
