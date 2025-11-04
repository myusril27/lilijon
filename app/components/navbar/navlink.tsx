"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";

interface NavLink {
  open: boolean;
  closeMenu: () => void;
}

export default function NavLinks({ open, closeMenu }: NavLink) {
  // Animasi container (stagger delay)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // jeda antar item
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  // Animasi tiap item menu
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] },
    },
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
          className="absolute left-0 top-full w-full bg-white shadow-md z-50 md:hidden"
        >
          <motion.ul
            variants={containerVariants}
            className="flex flex-col space-y-3 p-5 text-gray-800"
          >
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Room", href: "/room" },
              { name: "Contact", href: "/contact" },
              { name: "My Reservation", href: "/myreservation" },
              { name: "Dashboard", href: "/admin/dashboard" },
              { name: "Manage Room", href: "/admin/room" },
              { name: "Sign In", href: "/signin" },
            ].map((link, i) => (
              <motion.li
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="block text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
