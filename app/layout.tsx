import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "app/components/navbar/navbar";
import Footer from "./components/footer/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home",
  description: "Online Boking Hotel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main className="bg-gray-50 min-h-screen pt-[96px]">
        {children}
        </main>
        <Footer /> 
      </body>
    </html>
  );
}
