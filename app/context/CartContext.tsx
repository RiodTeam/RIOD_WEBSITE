"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { shopifyFetch } from "@/app/lib/shopify";
import {
  CREATE_CART_MUTATION,
  ADD_TO_CART_MUTATION,
  UPDATE_CART_MUTATION,
  REMOVE_FROM_CART_MUTATION,
  type ShopifyCart,
  type CartLine,
} from "@/app/lib/shopify-queries";

type CartContextType = {
  cart: ShopifyCart | null;
  cartItems: CartLine[];
  totalQuantity: number;
  totalAmount: string;
  currencyCode: string;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  loading: boolean;
  addToCart: (variantId: string, quantity?: number) => Promise<void>;
  updateCartItem: (lineId: string, quantity: number) => Promise<void>;
  removeFromCart: (lineId: string) => Promise<void>;
  goToCheckout: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<ShopifyCart | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Restore cart id from localStorage on mount
  useEffect(() => {
    const savedCartId = localStorage.getItem("riod_cart_id");
    if (savedCartId) {
      // Cart id is stored; actual cart state will be fetched on next add/update.
      // For simplicity we don't re-fetch the full cart on mount.
    }
  }, []);

  const addToCart = useCallback(
    async (variantId: string, quantity = 1) => {
      setLoading(true);
      try {
        if (!cart) {
          const data = await shopifyFetch<{ cartCreate: { cart: ShopifyCart } }>(
            CREATE_CART_MUTATION,
            { input: { lines: [{ merchandiseId: variantId, quantity }] } }
          );
          const newCart = data.cartCreate.cart;
          setCart(newCart);
          localStorage.setItem("riod_cart_id", newCart.id);
        } else {
          const data = await shopifyFetch<{ cartLinesAdd: { cart: ShopifyCart } }>(
            ADD_TO_CART_MUTATION,
            { cartId: cart.id, lines: [{ merchandiseId: variantId, quantity }] }
          );
          setCart(data.cartLinesAdd.cart);
        }
        setIsCartOpen(true);
      } catch (e) {
        console.error("addToCart error:", e);
      } finally {
        setLoading(false);
      }
    },
    [cart]
  );

  const updateCartItem = useCallback(
    async (lineId: string, quantity: number) => {
      if (!cart) return;
      setLoading(true);
      try {
        const data = await shopifyFetch<{ cartLinesUpdate: { cart: ShopifyCart } }>(
          UPDATE_CART_MUTATION,
          { cartId: cart.id, lines: [{ id: lineId, quantity }] }
        );
        setCart(data.cartLinesUpdate.cart);
      } catch (e) {
        console.error("updateCartItem error:", e);
      } finally {
        setLoading(false);
      }
    },
    [cart]
  );

  const removeFromCart = useCallback(
    async (lineId: string) => {
      if (!cart) return;
      setLoading(true);
      try {
        const data = await shopifyFetch<{ cartLinesRemove: { cart: ShopifyCart } }>(
          REMOVE_FROM_CART_MUTATION,
          { cartId: cart.id, lineIds: [lineId] }
        );
        setCart(data.cartLinesRemove.cart);
      } catch (e) {
        console.error("removeFromCart error:", e);
      } finally {
        setLoading(false);
      }
    },
    [cart]
  );

  const goToCheckout = useCallback(() => {
    if (cart?.checkoutUrl) {
      window.location.href = cart.checkoutUrl;
    }
  }, [cart]);

  const cartItems: CartLine[] = cart?.lines?.edges?.map((e) => e.node) ?? [];
  const totalQuantity = cart?.totalQuantity ?? 0;
  const totalAmount = cart?.cost?.totalAmount?.amount ?? "0";
  const currencyCode = cart?.cost?.totalAmount?.currencyCode ?? "INR";

  return (
    <CartContext.Provider
      value={{
        cart,
        cartItems,
        totalQuantity,
        totalAmount,
        currencyCode,
        isCartOpen,
        setIsCartOpen,
        loading,
        addToCart,
        updateCartItem,
        removeFromCart,
        goToCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextType {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
