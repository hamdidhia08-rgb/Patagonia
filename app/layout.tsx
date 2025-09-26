import type { Metadata } from "next";
import "./globals.css";
import { Sora } from "next/font/google";
import { Barlow_Condensed } from "next/font/google";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
});

export const metadata = {
  title: "Patagonia ",
  description: "Best travel agency in turkey",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <body className={`${barlow.variable} font-barlow antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}
