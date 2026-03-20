import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "../globals.css";
import Header from "../components/header/header";
import FooterSection from "../components/footer/FooterSection";
import AutoLeadPopup from "../components/common/AutoLeadPopup";
import { CartProvider } from "../context/CartContext";
import CartDrawer from "../components/shop/CartDrawer";
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
