import Link from "next/link";
import Image from "next/image";
import { type ShopifyProduct } from "@/app/lib/shopify-queries";

export default function ProductCard({ product }: { product: ShopifyProduct }) {
  const image = product.images.edges[0]?.node;
  const price = parseFloat(product.priceRange.minVariantPrice.amount);
  const compareAt = product.compareAtPriceRange?.minVariantPrice?.amount;
  const comparePrice = compareAt ? parseFloat(compareAt) : null;
  const isOnSale = comparePrice && comparePrice > price;
  const discount = isOnSale
    ? Math.round(((comparePrice - price) / comparePrice) * 100)
    : null;

  return (
    <Link
      href={`/store/${product.handle}`}
      className="group bg-[#f8f8f8] rounded-2xl overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative w-full aspect-square bg-white overflow-hidden">
        {image ? (
          <Image
            src={image.url}
            alt={image.altText || product.title}
            fill
            className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-[#e8e8e8] flex items-center justify-center">
            <span className="text-[#9a99a2] text-sm">No image</span>
          </div>
        )}
        {isOnSale && (
          <span className="absolute top-3 left-3 bg-[#cdf80a] text-black text-[10px] font-bold px-2 py-1 rounded-full">
            {discount}% OFF
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-[#1b1b1b] font-medium font-inter text-base leading-snug mb-3 group-hover:text-black">
          {product.title}
        </h3>

        <div className="mt-auto flex items-baseline gap-2">
          <span className="text-[#1b1b1b] font-semibold text-lg font-inter">
            Rs. {price.toLocaleString("en-IN")}
          </span>
          {isOnSale && (
            <span className="text-[#9a99a2] text-sm line-through">
              Rs. {comparePrice!.toLocaleString("en-IN")}
            </span>
          )}
        </div>

        <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-[#1b1b1b] opacity-0 group-hover:opacity-100 transition-opacity">
          View details
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
