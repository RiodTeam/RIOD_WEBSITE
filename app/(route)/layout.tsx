import { Geist, Geist_Mono, Inter, Cormorant_Garamond } from "next/font/google";
import "../globals.css";
import Header from "../components/header/header";
import FooterSection from "../components/footer/FooterSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
})

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${cormorantGaramond.variable} antialiased`}
    >
      <Header />
      {children}
      <FooterSection />
    </div>
  );
}
