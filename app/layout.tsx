import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Oswald } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const oswald = Oswald({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "ml.blendz — Barbershop",
  description:
    "Clean fades and precision cuts in Los Altos / Mountain View. Book a haircut starting at $30.",
  openGraph: {
    title: "ml.blendz — Barbershop",
    description:
      "Clean fades and precision cuts in Los Altos / Mountain View. Book a haircut starting at $30.",
    url: SITE_URL,
    siteName: "ml.blendz",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className={`${geist.variable} ${oswald.variable} font-sans flex min-h-full flex-col bg-zinc-950 text-white`}
      >
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}