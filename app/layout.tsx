import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "RIOD",
  description: "RIOD - Powering India's EV Revolution",
  icons: {
    icon: "/header/logo.svg",
    shortcut: "/header/logo.svg",
    apple: "/header/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
