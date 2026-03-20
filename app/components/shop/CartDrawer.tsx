"use client";

import { X, Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { useCart } from "@/app/context/CartContext";

export default function CartDrawer() {
  const {
    cartItems,
    totalQuantity,
    totalAmount,
    isCartOpen,
    setIsCartOpen,
    loading,
    updateCartItem,
    removeFromCart,
    goToCheckout,
  } = useCart();

  if (!isCartOpen) return null;

  const fmt = (amount: string) =>
    `Rs. ${parseFloat(amount).toLocaleString("en-IN")}`;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-[420px] bg-[#1b1b1b] text-white z-50 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <h2 className="text-lg font-medium font-inter">
            Cart {totalQuantity > 0 && <span className="text-[#9a99a2] text-sm">({totalQuantity})</span>}
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-[#9a99a2] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 text-center">
              <p className="text-[#9a99a2]">Your cart is empty</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-sm text-[#cdf80a] hover:underline"
              >
                Continue browsing
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              {cartItems.map((item) => {
                const v = item.merchandise;
                return (
                  <div key={item.id} className="flex gap-4">
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm font-inter leading-snug truncate">
                        {v.product.title}
                      </p>
                      {v.title !== "Default Title" && (
                        <p className="text-xs text-[#9a99a2] mt-0.5">{v.title}</p>
                      )}
                      <p className="text-sm text-[#cdf80a] mt-1 font-medium">
                        {fmt(v.price.amount)}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-2 shrink-0">
                      {/* Qty controls */}
                      <div className="flex items-center gap-2 border border-white/20 rounded-full px-2 py-1">
                        <button
                          onClick={() => updateCartItem(item.id, item.quantity - 1)}
                          disabled={loading || item.quantity <= 1}
                          className="text-white disabled:opacity-30 hover:text-[#cdf80a] transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateCartItem(item.id, item.quantity + 1)}
                          disabled={loading}
                          className="text-white disabled:opacity-30 hover:text-[#cdf80a] transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        disabled={loading}
                        className="text-[#9a99a2] hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="px-6 py-5 border-t border-white/10 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[#9a99a2] text-sm">Total</span>
              <span className="text-white font-medium text-lg">{fmt(totalAmount)}</span>
            </div>

            <button
              onClick={goToCheckout}
              disabled={loading}
              className="w-full bg-[#cdf80a] text-black font-medium py-3.5 rounded-full flex items-center justify-center gap-2 hover:bg-[#b8e000] transition-colors disabled:opacity-50"
            >
              Proceed to Checkout
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[11px] text-[#9a99a2] text-center">
              Secure checkout via Shopify. Pay with UPI, cards, or EMI.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
