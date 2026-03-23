import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "../globals.css";
import Header from "../components/header/header";
import FooterSection from "../components/footer/FooterSection";
import AutoLeadPopup from "../components/common/AutoLeadPopup";
import { CartProvider } from "../context/CartContext";
import CartDrawer from "../components/store/CartDrawer";
import WhatsAppButton from "../components/common/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "RIOD",
  description: "RIOD - EV Charging & Energy Technology",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "RIOD - EV Charging & Energy Technology",
    description:
      "Every layer of charging infrastructure, built in-house: from the hardware and firmware that powers the device, to the cloud platforms and energy systems that keep it all running.",
    url: "https://riod.energy",
    siteName: "RIOD",
    images: [
      {
        url: "/heroes/ev-chargers-hero.webp",
        width: 1400,
        height: 800,
        alt: "RIOD EV Charging Infrastructure",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RIOD - EV Charging & Energy Technology",
    description:
      "Every layer of charging infrastructure, built in-house: from the hardware and firmware that powers the device, to the cloud platforms and energy systems that keep it all running.",
    images: ["/heroes/ev-chargers-hero.webp"],
  },
};

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div
          className={`${geistSans.variable} ${inter.variable} antialiased`}
        >
          <CartProvider>
            <Header />
            {children}
            <FooterSection />
            <AutoLeadPopup />
            <CartDrawer />
            <WhatsAppButton />
          </CartProvider>
        </div>
      </body>
    </html>
  );
}
