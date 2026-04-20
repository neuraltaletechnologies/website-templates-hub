import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Website Templates Hub",
  description: "Landing page to preview business, restaurant, and real estate demos.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
