import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../style/global.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inventory Management Landing Page",
  description: "This page includes inventory management in detail",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
