import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ml.blendz — Barbershop",
  description:
    "Clean fades and precision cuts in Los Altos / Mountain View. Book a haircut starting at $30.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className={`${geist.className} flex min-h-full flex-col bg-zinc-950 text-white`}
      >
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
