import type { Metadata } from "next";
import ThankYouClient from "./page.client";

export const metadata: Metadata = {
  title: "Order Confirmed | RIOD",
  description: "Thank you for your purchase from RIOD. Your order has been confirmed.",
  openGraph: {
    title: "Order Confirmed | RIOD",
    description: "Thank you for your purchase from RIOD. Your order has been confirmed.",
    url: "https://riod.energy/thank-you",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Order Confirmed | RIOD",
    description: "Thank you for your purchase from RIOD. Your order has been confirmed.",
  },
};

export default function ThankYouPage() {
  return <ThankYouClient />;
}
