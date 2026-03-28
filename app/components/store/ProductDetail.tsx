"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingCart, MessageCircle, Check } from "lucide-react";
import { useCart } from "@/app/context/CartContext";
import { type ShopifyProduct, type ShopifyVariant } from "@/app/lib/shopify-queries";

export default function ProductDetail({ product }: { product: ShopifyProduct }) {
  const { addToCart, loading } = useCart();
  const variants: ShopifyVariant[] = product.variants.edges.map((e) => e.node);
  const [selectedVariant, setSelectedVariant] = useState<ShopifyVariant>(variants[0]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [added, setAdded] = useState(false);

  const images = product.images.edges.map((e) => e.node);
  const price = parseFloat(selectedVariant.price.amount);
  const compareAt = selectedVariant.compareAtPrice?.amount;
  const comparePrice = compareAt ? parseFloat(compareAt) : null;
  const isOnSale = comparePrice && comparePrice > price;
  const discount = isOnSale ? Math.round(((comparePrice - price) / comparePrice) * 100) : null;

  const whatsappMsg = encodeURIComponent(
    `Hi, I'm interested in the ${product.title}. Can you share more details?`
  );
  const whatsappUrl = `https://wa.me/919067090165?text=${whatsappMsg}`;

  async function handleAddToCart() {
    await addToCart(selectedVariant.id, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="w-[90%] max-w-[1400px] mx-auto py-10 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
      {/* ── Images ── */}
      <div>
        <div className="relative w-full aspect-square bg-[#f8f8f8] rounded-2xl overflow-hidden mb-4">
          {images[selectedImage] && (
            <Image
              src={images[selectedImage].url}
              alt={images[selectedImage].altText || product.title}
              fill
              className="object-contain p-8"
              priority
            />
          )}
          {isOnSale && (
            <span className="absolute top-4 left-4 bg-[#cdf80a] text-black text-xs font-bold px-3 py-1 rounded-full">
              {discount}% OFF
            </span>
          )}
        </div>

        {images.length > 1 && (
          <div className="flex gap-3 flex-wrap">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-colors ${
                  selectedImage === i ? "border-[#1b1b1b]" : "border-transparent"
                } bg-[#f8f8f8]`}
              >
                <Image src={img.url} alt={img.altText || ""} fill className="object-contain p-1" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Info ── */}
      <div>
        <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#9a99a2] font-inter mb-3 block">
          RIOD Powerpod
        </span>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#1b1b1b] font-inter leading-tight mb-4">
          {product.title}
        </h1>

        {/* Price */}
        <div className="flex items-baseline gap-3 mb-2">
          <span className="text-2xl font-semibold text-[#1b1b1b] font-inter">
            Rs. {price.toLocaleString("en-IN")}
          </span>
          {isOnSale && (
            <span className="text-[#9a99a2] text-lg line-through">
              Rs. {comparePrice!.toLocaleString("en-IN")}
            </span>
          )}
        </div>
        <p className="text-xs text-[#9a99a2] mb-6">Tax included. Shipping calculated at checkout.</p>

        {/* Variant selector */}
        {variants.length > 1 && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#1b1b1b] mb-2 font-inter">
              Select variant
            </label>
            <div className="flex flex-wrap gap-2">
              {variants.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setSelectedVariant(v)}
                  className={`px-4 py-2 rounded-full text-sm font-inter border transition-colors ${
                    selectedVariant.id === v.id
                      ? "bg-[#1b1b1b] text-white border-[#1b1b1b]"
                      : "bg-white text-[#1b1b1b] border-[#d0d0d0] hover:border-[#1b1b1b]"
                  } ${!v.availableForSale ? "opacity-40 cursor-not-allowed" : ""}`}
                  disabled={!v.availableForSale}
                >
                  {v.title}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <button
            onClick={handleAddToCart}
            disabled={loading || !selectedVariant.availableForSale}
            className="flex-1 flex items-center justify-center gap-2 bg-[#1b1b1b] text-white py-3.5 rounded-full font-medium font-inter hover:bg-[#333] transition-colors disabled:opacity-50"
          >
            {added ? (
              <>
                <Check className="w-4 h-4 text-[#cdf80a]" />
                Added to Cart
              </>
            ) : loading ? (
              "Adding..."
            ) : !selectedVariant.availableForSale ? (
              "Out of Stock"
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </>
            )}
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 px-6 rounded-full font-medium font-inter hover:bg-[#20b858] transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-[#e8e8e8]">
          {["Shipping across India", "OCPP 1.6J", "2-year warranty"].map((b) => (
            <div key={b} className="flex items-center gap-1.5 text-sm text-[#626262]">
              <Check className="w-3.5 h-3.5 text-[#cdf80a] shrink-0" style={{ color: "#1b1b1b" }} />
              {b}
            </div>
          ))}
        </div>

        {/* Description */}
        <div
          className="prose prose-sm max-w-none text-[#626262] leading-relaxed"
          dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
        />
      </div>
    </div>
  );
}
