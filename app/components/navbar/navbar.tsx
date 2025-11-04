"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efek scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Room", href: "/room" },
    { name: "Contact", href: "/contact" },
    { name: "My Reservation", href: "/my-reservation" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Manage Room", href: "/manage-room" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-md backdrop-blur-md" : "bg-white/70 backdrop-blur-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6 md:py-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/logo.png" // ← Ganti dengan path logo kamu di folder /public
            alt="Hotel Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-xl md:text-2xl font-bold text-orange-500">
            Lilijon<span className="text-gray-800">Hotel</span>
          </span>
        </Link>

        {/* MENU DESKTOP */}
        <nav>
          <ul className="hidden md:flex gap-8 items-center font-medium text-gray-800">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="transition-all duration-300 text-gray-700 hover:text-orange-500
                    after:content-['']
                    after:absolute
                    after:left-1/2
                    after:-bottom-1
                    after:w-0
                    after:h-[2px]
                    after:bg-orange-500
                    after:transition-all
                    after:duration-300
                    group-hover:after:w-full
                    group-hover:after:left-0"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* SIGN IN */}
            <li>
              <Link
                href="/signin"
                className="border-2 border-orange-500 text-orange-500 px-4 py-1.5 rounded-md hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                Sign In
              </Link>
            </li>
          </ul>

          {/* TOGGLE MENU MOBILE */}
          <button
            className="md:hidden ml-4 text-gray-700"
            aria-label="Toggle menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* MENU MOBILE */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="absolute left-0 top-full w-full bg-white/95 shadow-md md:hidden"
              >
                <ul className="flex flex-col py-4 px-6 space-y-3 text-gray-800 font-medium">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block py-1 hover:text-orange-500 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/signin"
                      onClick={() => setOpen(false)}
                      className="block py-2 border-2 border-orange-500 text-orange-500 text-center rounded-md hover:bg-orange-500 hover:text-white transition-all"
                    >
                      Sign In
                    </Link>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}
