import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from 'next/font/google';
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import "./globals.css";

// Import Google Fonts
const roboto = Roboto({
  weight: ['400','700'],
  subsets: ['latin'],
  variable: "--font-roboto",
});

const robotoMono = Roboto_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Home",
  description: "Online Booking Hotel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${robotoMono.variable} antialiased`}>
        <Navbar />
        <main className="bg-gray-50 min-h-screen pt-[96px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
